import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faFilePdf, faFileImage, faUser, faBook, faSpinner, faTimesCircle, faCheckCircle, faStopwatch, faSignInAlt, faCalendarAlt, faComments, faReply } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';

// Components
import WorkTimeTracker from './WorkTimeTracker/WorkTimeTracker';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Card from '../../../../components/Backend/Dashboard/Card/Card';
import Table from '../../../../components/Backend/UI/Table/Table';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import View from '../../../../components/Backend/UI/View/View';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import Counter from '../../../../components/Backend/UI/Counter/Counter';
import WithTooltip from '../../../../components/UI/WithTooltip/WithTooltip';
import BetweenButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../store/actions';
import { updateObject, convertDate, timeFromTimestamp, convertTime } from '../../../../shared/utility';

import 'react-calendar/dist/Calendar.css';

const twoDigits = number => number < 10 ? '0' + number : number;

class Dashboard extends Component {
    state = {
        blocksData: null,
        tasks: null, attendanceReport: null, calendar: null, chatBox: null, messages: null,
        workTimeTracker: null,

        position: null,

        interval: null,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.dashboard.blocksData && !prevState.blocksData) {
            const { blocksData, tasks, attendanceReport, calendar, chatBox, messages, workTimeTracker } = nextProps.backend.dashboard;
            return updateObject(prevState, { blocksData, tasks, attendanceReport, calendar, chatBox, messages, workTimeTracker });
        }
        // if (nextProps.backend.requests.requests && !prevState.requestsRequests) return updateObject(prevState, { requestsRequests: nextProps.backend.requests.requests });
        return prevState;
    }

    componentDidMount() {
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this.getPosition);

        this.props.get();
    }

    componentDidUpdate(prevProps, prevState) {
        const { dashboard, attendanceReport, requests } = this.props.backend;

        if (!attendanceReport.loading && prevProps.backend.attendanceReport.loading) {
            const { blocksData } = this.state;
            blocksData.workedTime = attendanceReport.workedTime;
            blocksData.status = attendanceReport.status;

            this.setState({ blocksData }, () => {
                const { blocksData } = this.state;
                if (blocksData.status) {
                    const interval = setInterval(() => {
                        blocksData.workedTime++;
                        this.setState({ blocksData });
                    }, 1000);
                    this.setState({ interval });
                } else {
                    const { interval } = this.state;
                    if (interval) {
                        clearInterval(interval);
                        this.setState({ interval: null });
                    }
                }
            });
        }

        if (this.state.blocksData && !prevState.blocksData) {
            if (this.state.blocksData.status) {
                const interval = setInterval(() => {
                    const { blocksData } = this.state;
                    blocksData.workedTime++;
                    this.setState({ blocksData });
                }, 1000);
                this.setState({ interval });
            }
        }

        if (dashboard.blocksData && !prevProps.backend.dashboard.blocksData) {
            const channel = Echo.channel('public');
            channel.listen('UserDashboard', ({ blocksData, tasks, attendanceReport, calendar, chatBox, messages, workTimeTracker }) => {
                if (this.props.auth.token) this.setState({ blocksData, tasks, attendanceReport, calendar, chatBox, messages, workTimeTracker });
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
        this.props.reset();
    }

    getPosition = position => {
        const { latitude, longitude } = position.coords;
        this.setState({ position: { latitude, longitude } });
    }

    clock = () => {
        const { position } = this.state;
        console.log({ position });
        if (position) this.props.onPostClock(this.state.position);
        else alert('Please allow geolocation.');
    }

    render() {
        let { blocksData, tasks, attendanceReport, calendar, chatBox, messages, workTimeTracker } = this.state;
        let { auth: { data: { job } }, backend: { dashboard: { loading, error } } } = this.props;

        let content = null;
        let errors = null;

        const colors = ['orange', 'green'];
        const texts = ['Pending', 'Completed'];
        const icons = [faSpinner, faCheckCircle];

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (blocksData) {
                const { workedTime, leaveTaken, unreadMessages, status } = blocksData;
                const data = [
                    {
                        title: 'Weekly Worked Time',
                        children: <div className="d-flex">
                            <div>
                                <div className="d-flex justify-content-center pb-2">
                                    <div>
                                        <div className="text-300 text-small d-flex justify-content-center">
                                            HH<span className="pl-2 pr-5" />MM<span className="pl-2 pr-5" />SS
                                        </div>
                                        <div className="text-700 d-flex justify-content-center" style={{ width: 210 }}>
                                            {timeFromTimestamp(workedTime)}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-brokenblue position-relative overflow-hidden" style={{ height: 15 }}>
                                        <div className="bg-yellow h-100" style={{ width: Math.floor(workedTime * 100 / job.hours_per_week / 3600) + '%' }} />
                                        <div className="position-absolute text-white text-300 text-xx-small" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>{Math.floor(workedTime * 100 / job.hours_per_week / 3600)}% to target</div>
                                    </div>
                                </div>
                            </div>
                        </div>,
                        icon: faClock,
                        link: '/user/attendance-report/',
                        color: 'paleblue',
                        details: '',
                        titleColor: 'white',
                        circleColor: 'white',
                        circleBorder: 'orange'
                    },
                    {
                        title: 'Total Leave Taken',
                        children: leaveTaken + ' Days',
                        icon: faLandmark,
                        link: '/user/attendance-report/',
                        color: 'nightblue',
                        details: 'You have exceeded',
                        titleColor: 'white',
                        circleColor: 'orange',
                        circleBorder: 'white'
                    },
                    {
                        title: 'Unread Messages',
                        children: unreadMessages,
                        icon: faEnvelope,
                        link: '/user/messages',
                        color: 'pink',
                        details: 'Unread Messages',
                        titleColor: 'white',
                        circleColor: 'orange',
                        circleBorder: 'white'
                    },
                    {
                        title: 'Clock-in-out Status',
                        children: <div className="d-inline-block text-300 text-small text-blue text-center">
                            <div className="pb-2">You need to Clock {status ? 'out' : 'in'}</div>
                            <div>
                                <BetweenButton onClick={this.clock} color={status ? "pink" : "green"} icon={status ? faTimes : faSignInAlt}>Clock {status ? 'Out' : 'In'}</BetweenButton>
                            </div>
                        </div>,
                        icon: faStopwatch,
                        link: '/user/',
                        color: 'white',
                        details: '',
                        titleColor: 'blue',
                        circleColor: 'orange',
                        circleBorder: 'orange',
                        light: true
                    }
                ];

                const cards = data.map(({ title, titleColor, icon, link, color, children, details, circleBorder, circleColor, light }, index) => <Card color={color} key={index} title={title} titleColor={titleColor} details={details} circleBorder={circleBorder} circleColor={circleColor} icon={icon} link={link} light={light}>{children}</Card>);

                const tasksData = tasks.map(task => {
                    // const viewContent = <RequestView task={task} country={country} />;

                    // const editContent = <Edit task={updateObject(task, { page_status: 'dashboard' })} />;

                    return updateObject(task, {
                        created_at: convertDate(task.created_at),
                        date_due: convertDate(task.date_due),
                        status: <Badge color={colors[task.status]} className="badge-block position-static"><FontAwesomeIcon icon={icons[task.status]} className={task.status === 0 ? "fa-spin" : ""} fixedWidth /> {texts[task.status]}</Badge>,
                        action: <div className="text-center">
                            <View title={'Task details'} content={<div />}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Task edit'} content={<div />}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => alert('Deleted')}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                const attendanceReportData = attendanceReport.map(day => {
                    // const viewContent = <RequestView day={day} country={country} />;

                    // const editContent = <Edit day={updateObject(day, { page_status: 'dashboard' })} />;

                    return updateObject(day, {
                        clock_in_date: convertDate(day.clock_in),
                        clock_out_date: convertDate(day.clock_out),
                        time: timeFromTimestamp(day.time),
                        clock_in_time: convertTime(day.clock_in),
                        clock_out_time: convertTime(day.clock_out),
                        status: <Badge color={colors[day.status]} className="badge-block position-static"><FontAwesomeIcon icon={icons[day.status]} className={day.status === 0 ? "fa-spin" : ""} fixedWidth /> {texts[day.status]}</Badge>,
                    });
                });

                const messagesData = messages.map(message => {
                    // const viewContent = <RequestView message={message} country={country} />;

                    // const editContent = <Edit message={updateObject(message, { page_status: 'dashboard' })} />;

                    return updateObject(message, {
                        created_at: convertDate(message.created_at),
                        action: <div className="text-center">
                            <Button size="sm" color="orange" className="mr-2">
                                <FontAwesomeIcon icon={faEye} className="mr-2" fixedWidth />
                                View
                            </Button>

                            <Link className="mr-2" to={'/user/messages/' + message.id + '/edit'}>
                                <Button size="sm" color="blue">
                                    <FontAwesomeIcon icon={faReply} className="mr-2" fixedWidth />
                                    Reply
                                </Button>
                            </Link>
                        </div>
                    });
                });

                content = (
                    <>
                        <Row>
                            {cards}
                        </Row>

                        <Row className="mt-5">
                            <Table array={tasksData} draggable closable title="Tasks Board" icon={faTasks} bordered limit={5} lg={6} className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Creation Date', key: 'created_at' },
                                    { name: 'Author', key: 'author' },
                                    { name: 'Date Due', key: 'date_due' },
                                    { name: 'Comment', key: 'comment' },
                                    { name: 'Status', key: 'status', minWidth: 130 },
                                    { name: 'Action', key: 'action' }
                                ]}>
                                <Link to="/user/tasks" className="text-secondary">{'View full task list | >'}</Link>
                            </Table>

                            <Col lg={6} className="pt-3 pt-lg-0">
                                <div className="bg-brokenblue shadow-sm text-soft h-100 d-flex flex-column">
                                    <div className="p-3 border-bottom border-border text-700 position-relative d-flex">
                                        <span className="d-inline-flex align-items-center"><FontAwesomeIcon size="lg" className="text-orange mr-2" fixedWidth icon={faTasks} />Work Time Tracker</span>

                                        <div className="ml-auto d-none d-lg-flex justify-content-end align-items-center text-soft position-absolute" style={{ top: '50%', right: 16, transform: 'translateY(-50%)' }}>
                                            <FontAwesomeIcon icon={faArrowsAlt} size="lg" className="mr-3" />

                                            <FontAwesomeIcon icon={faTimes} size="2x" />
                                        </div>
                                    </div>

                                    <Row className="p-3 flex-fill d-flex flex-column justify-content-center">
                                        <Col xs={12} lg={11} style={{ minHeight: 150 }}>
                                            {/* <WorkTimeTracker data={workTimeTracker} /> */}
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Table array={attendanceReportData} draggable closable title="Attendance Report Log" icon={faTasks} bordered limit={5} lg={8} outerClassName="pt-3" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Clock In Date', key: 'clock_in_date' },
                                    { name: 'Clock In Time', key: 'clock_in_time' },
                                    { name: 'Clock Out Date', key: 'clock_out_date' },
                                    { name: 'Clock Out Time', key: 'clock_out_time' },
                                    { name: 'Total time', key: 'time' },
                                ]}>
                                <Link to="/user/attendance-report" className="text-secondary">{'View full list | >'}</Link>
                            </Table>

                            <Col lg={4} className="pt-3">
                                <div className="bg-white shadow-sm text-secondary h-100 d-flex flex-column">
                                    <div className="p-3 border-bottom border-soft text-700 position-relative d-flex">
                                        <span className="text-blue d-inline-flex align-items-center"><FontAwesomeIcon size="lg" className="mr-2" fixedWidth icon={faCalendarAlt} />My Calendar</span>

                                        <div className="ml-auto d-none d-lg-flex justify-content-end align-items-center text-secondary position-absolute" style={{ top: '50%', right: 16, transform: 'translateY(-50%)' }}>
                                            <FontAwesomeIcon icon={faArrowsAlt} size="lg" className="mr-3" />

                                            <FontAwesomeIcon icon={faTimes} size="2x" />
                                        </div>
                                    </div>

                                    <Row className="flex-fill d-flex flex-column justify-content-center">
                                        <Col xs={12} style={{ minHeight: 150 }}>
                                            <Calendar className="w-100 h-100 text-poppins text-700" />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col lg={3} className="pt-3">
                                <div className="bg-white shadow-sm text-secondary h-100 d-flex flex-column">
                                    <div className="p-3 border-bottom border-soft text-700 position-relative d-flex">
                                        <span className="text-blue d-inline-flex align-items-center"><FontAwesomeIcon size="lg" className="mr-2" fixedWidth icon={faComments} />ChatBox</span>

                                        <div className="ml-auto d-none d-lg-flex justify-content-end align-items-center text-secondary position-absolute" style={{ top: '50%', right: 16, transform: 'translateY(-50%)' }}>
                                            <FontAwesomeIcon icon={faArrowsAlt} size="lg" className="mr-3" />

                                            <FontAwesomeIcon icon={faTimes} size="2x" />
                                        </div>
                                    </div>

                                    <Row className="flex-fill d-flex flex-column justify-content-center">
                                        <Col xs={12} lg={11} style={{ minHeight: 150 }}>

                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Table array={messagesData} draggable closable title="Recent Messages" icon={faEnvelope} bordered limit={5} lg={9} outerClassName="pt-3" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Received Date', key: 'created_at' },
                                    { name: 'Sender', key: 'sender' },
                                    { name: 'Object', key: 'object' },
                                    { name: 'Content', key: 'content' },
                                    { name: 'Action', key: 'action' },
                                ]}>
                                <Link to="/user/messages" className="text-secondary">{'View full list | >'}</Link>
                            </Table>
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Dashboard" icon={faTachometerAlt} />
                    <SpecialTitle user icon={faTachometerAlt}>Employee panel</SpecialTitle>
                    <Subtitle user>Dashboard</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(actions.getUserDashboard()),
    reset: () => dispatch(actions.dashboardReset()),
    onPostClock: position => dispatch(actions.postClock(position)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));