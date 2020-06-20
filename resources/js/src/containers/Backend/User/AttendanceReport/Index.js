import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSpinner, faCheckCircle, faCalendarAlt, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/List/List';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import WithTooltip from '../../../../components/UI/WithTooltip/WithTooltip';
import Feedback from '../../../../components/Feedback/Feedback';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../components/Backend/UI/View/View';
import Counter from '../../../../components/Backend/UI/Counter/Counter';

import * as actions from '../../../../store/actions';
import { updateObject, convertDate, timeFromTimestamp, convertTime } from '../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.onGetAttendanceReport();
    }

    componentWillUnmount() {
        this.props.onResetAttendanceReport();
    }

    render() {
        let { backend: { attendanceReport: { loading, error, message, attendanceReport, weeks } } } = this.props;

        let content;
        let errors;
        let feedback;

        const colors = ['orange', 'green'];
        const texts = ['Pending', 'Completed'];
        const icons = [faSpinner, faCheckCircle];

        const cardColors = ['orange', 'pink', 'green', 'myprimary'];

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (attendanceReport) {
                feedback = <Feedback message={message} />;

                const weeksData = weeks.map((week, index) => <Col md={6} xl={3} key={JSON.stringify(week)}>
                    <div className="h-100 p-3 bg-white shadow-sm d-flex flex-column">
                        <div className="text-large text-brokenblue">
                            <FontAwesomeIcon icon={faCalendarCheck} className={"mr-2 bg-" + cardColors[index]} />
                            Week {index + 1} - Year {week.year}
                        </div>

                        <div className="flex-fill d-flex align-items-center">
                            <div>
                                <div className="text-soft text-700 text-large">{timeFromTimestamp(week.time)}</div>
                                <div className="text-300">Hours</div>
                            </div>
                        </div>
                    </div>
                </Col>);

                const attendanceReportData = attendanceReport.map(day => {
                    return updateObject(day, {
                        clock_in_date: convertDate(day.clock_in),
                        clock_out_date: convertDate(day.clock_out),
                        time: timeFromTimestamp(day.time),
                        clock_in_time: convertTime(day.clock_in),
                        clock_out_time: convertTime(day.clock_out),
                        status: <Badge color={colors[day.status]} className="badge-block position-static"><FontAwesomeIcon icon={icons[day.status]} className={day.status === 0 ? "fa-spin" : ""} fixedWidth /> {texts[day.status]}</Badge>,
                    });
                });

                content = (
                    <>
                        <div className="d-inline-flex align-items-center rounded-sm bg-brokenblue text-white">
                            <div className="p-3 border-right border-soft text-nowrap">
                                <FontAwesomeIcon icon={faCalendarAlt} className="text-yellow mr-2" />
                                <span>
                                    {["January", "February", "March", "April", "May", "June",
                                        "July", "August", "September", "October", "November", "December"
                                    ][new Date().getMonth()]}
                                </span>
                            </div>

                            <div className="p-3">
                                {new Date().getFullYear()}
                            </div>
                        </div>

                        <Row className="py-5">
                            {weeksData}
                        </Row>

                        <Row>
                            <List array={attendanceReportData} data={JSON.stringify(attendanceReport)} bordered icon={faClock} title="Attendance Report" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Clock In Date', key: 'clock_in_date' },
                                    { name: 'Clock In Time', key: 'clock_in_time' },
                                    { name: 'Clock Out Date', key: 'clock_out_date' },
                                    { name: 'Clock Out Time', key: 'clock_out_time' },
                                    { name: 'Total time', key: 'time' },
                                ]} />
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Attendance Report" icon={faClock} />
                    <SpecialTitle user icon={faClock}>Employee panel</SpecialTitle>
                    <Subtitle user>Attendance Report</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {errors}
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onGetAttendanceReport: () => dispatch(actions.getAttendanceReport()),
    onPostTaskDelete: id => dispatch(actions.postTaskDelete(id)),
    onPostTaskUpdate: (id, data) => dispatch(actions.postTaskUpdate(id, data)),
    onResetAttendanceReport: () => dispatch(actions.resetAttendanceReport()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));