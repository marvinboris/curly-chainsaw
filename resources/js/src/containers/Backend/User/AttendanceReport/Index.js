import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSpinner, faCheckCircle, faCalendarAlt, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel2';

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
    state = {
        year: new Date().getFullYear()
    }

    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let { backend: { attendanceReport: { loading, error, message, attendanceReport, weeks } } } = this.props;
        const { year } = this.state;

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

                const weeksData = weeks.map((week, index) => <div className="py-3" key={JSON.stringify(updateObject(week, { index }))}>
                    <div className="h-100 p-3 bg-white shadow-sm rounded-4 d-flex flex-column">
                        <div className="text-large text-brokenblue">
                            <FontAwesomeIcon icon={faCalendarCheck} className={"mr-2 text-" + cardColors[index % cardColors.length]} />
                            Week {index + 1} - Year {week.year}
                        </div>

                        <div className="flex-fill d-flex align-items-center">
                            <div>
                                <div className="text-secondary text-700 text-large">{timeFromTimestamp(week.time)}</div>
                                <div className="text-300">Hours</div>
                            </div>
                        </div>
                    </div>
                </div>);

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
                                    Year
                                </span>
                            </div>

                            <div className="p-3">
                                {year}
                            </div>
                        </div>

                        <Row className="py-4">
                            <Col xs={12}>
                                <OwlCarousel ref="Weeks Data" options={{ responsive: { 0: { items: 1 }, 1100: { items: 2 }, 1550: { items: 4 } }, loop: false, dots: false, margin: 20 }}>
                                    {weeksData}
                                </OwlCarousel>
                            </Col>
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
    get: () => dispatch(actions.getAttendanceReport()),
    reset: () => dispatch(actions.attendanceReportReset()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));