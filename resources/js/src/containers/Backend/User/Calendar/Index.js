import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faCalendarAlt, faDownload, faSpinner, faTimesCircle, faCheckCircle, faFileArchive, faFilePdf, faFileImage, faUser, faBook, faCheck } from '@fortawesome/free-solid-svg-icons';

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

import Edit from './Actions/Edit';
import Add from './Actions/Add';
import RawView from './Actions/View';

import * as actions from '../../../../store/actions';
import { updateObject, convertDate, convertTime } from '../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.onGetCalendar();
    }

    componentWillUnmount() {
        this.props.onResetCalendar();
    }

    render() {
        let { backend: { calendar: { loading, error, message, events } } } = this.props;

        let content;
        let errors;
        let feedback;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (events) {
                feedback = <Feedback message={message} />;

                const eventsData = events.map(event => {
                    const colors = ['orange', 'pink', 'green'];
                    const texts = ['Pending', 'Unachieved', 'Achieved'];
                    const icons = [faSpinner, faTimesCircle, faCheckCircle];

                    const viewContent = <RawView event={event} />;

                    const editContent = <Edit event={event} />;

                    return updateObject(event, {
                        start_date: convertDate(event.start_time),
                        start_time: convertTime(event.start_time),
                        finish_time: convertTime(event.finish_time),
                        finish_date: convertDate(event.finish_time),
                        status: <Badge color={colors[event.status]} className="badge-block position-static"><FontAwesomeIcon icon={icons[event.status]} className={[0].includes(event.status) ? "fa-spin" : ""} fixedWidth /> {texts[event.status]}</Badge>,
                        action: <div className="text-center">
                            <View title={'Event details: ' + event.title} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Event edit: ' + event.title} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => alert(event.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={eventsData} data={JSON.stringify(events)} bordered add="Add Event" content={<Add />} icon={faCalendarAlt} title="My Calendar" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Event Title', key: 'title' },
                                    { name: 'Start Date', key: 'start_date' },
                                    { name: 'Start Time', key: 'start_time' },
                                    { name: 'End Date', key: 'finish_date' },
                                    { name: 'Finish Time', key: 'finish_time' },
                                    { name: 'Event Type', key: 'event_type' },
                                    { name: 'Event Description', key: 'description' },
                                    { name: 'Status', key: 'status', minWidth: 140 },
                                    { name: 'Action', key: 'action', fixed: true }
                                ]} />
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="My Calendar" icon={faCalendarAlt} />
                    <SpecialTitle user icon={faCalendarAlt}>Employee panel</SpecialTitle>
                    <Subtitle user>My Calendar</Subtitle>
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
    onGetCalendar: () => dispatch(actions.getCalendar()),
    onPostCalendarDelete: id => dispatch(actions.postCalendarDelete(id)),
    onPostCalendarUpdate: (id, data) => dispatch(actions.postCalendarUpdate(id, data)),
    onResetCalendar: () => dispatch(actions.resetCalendar()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));