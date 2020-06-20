import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faCalendarAlt, faDownload, faSpinner, faTimesCircle, faCheckCircle, faFileArchive, faFilePdf, faFileImage, faUser, faBook, faCheck } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../../components/Backend/UI/List/List';
import Error from '../../../../../components/Error/Error';
import CustomSpinner from '../../../../../components/UI/CustomSpinner/CustomSpinner';
import WithTooltip from '../../../../../components/UI/WithTooltip/WithTooltip';
import Feedback from '../../../../../components/Feedback/Feedback';
import Delete from '../../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../../components/Backend/UI/View/View';
import Counter from '../../../../../components/Backend/UI/Counter/Counter';

import Edit from '../Actions/Edit';
import Description from '../Actions/Description';
import RawView from '../Actions/View';

import * as actions from '../../../../../store/actions';
import { updateObject, convertDate } from '../../../../../shared/utility';

class Inbox extends Component {
    componentDidMount() {
        this.props.onGetMessages();
    }

    componentWillUnmount() {
        this.props.onResetMessages();
    }

    render() {
        let { backend: { messages: { loading, error, message, messages } } } = this.props;

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
            if (messages) {
                feedback = <Feedback message={message} />;

                const messagesData = messages.map(message => {
                    const viewContent = <RawView message={message} />;

                    const editContent = <Edit message={message} />;

                    return updateObject(message, {
                        created_at: convertDate(message.created_at),
                        action: <div className="text-center">
                            <View title={'Message details: ' + message.title} content={viewContent}>
                                <Button size="sm" color="orange" className="mr-2">
                                    <FontAwesomeIcon icon={faEye} className="mr-2" fixedWidth />
                                    View
                                </Button>
                            </View>
                            <View title={'Message edit: ' + message.title} content={editContent}>
                                <Button size="sm" color="blue">
                                    <FontAwesomeIcon icon={faReply} className="mr-2" fixedWidth />
                                    Reply
                                </Button>
                            </View>
                            <Delete deleteAction={() => alert(message.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={messagesData} data={JSON.stringify(messages)} bordered add="New Message" link="/user/messages/add" icon={faEnvelope} title="Received Messages" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Received Date', key: 'created_at' },
                                    { name: 'Sender', key: 'sender' },
                                    { name: 'Object', key: 'object' },
                                    { name: 'Content', key: 'content' },
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
                    <Breadcrumb main="Received Messages" icon={faEnvelope} />
                    <SpecialTitle user icon={faEnvelope}>Employee panel</SpecialTitle>
                    <Subtitle user>Received Messages</Subtitle>
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
    onGetMessages: () => dispatch(actions.getInboxMessages()),
    onPostMessageDelete: id => dispatch(actions.postMessageDelete(id)),
    onPostMessageUpdate: (id, data) => dispatch(actions.postMessageUpdate(id, data)),
    onResetMessages: () => dispatch(actions.resetMessages()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Inbox));