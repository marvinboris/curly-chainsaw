import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Collapse, Nav, UncontrolledDropdown, DropdownToggle, Badge, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendar, faPowerOff, faTimes, faSpinner, faCheckCircle, faTimesCircle, faExclamationTriangle, faComments, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

// import NavigationItem from './NavigationItem/NavigationItem';
// import MyDropdownItem from '../../../Navigation/NavigationItems/DropdownItem/DropdownItem';

export default ({ data, sidedrawerToggle, logoutHandler, role, comments = [], messages = [], notifications = [], date: { weekDay, day, month, year }, clock: { hours, minutes, seconds } }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const notificationItems = notifications.map(notification => {
        let message, icon;
        switch (notification.type) {
            case 'App\\Notifications\\PlanUser':
                message = <Link to={"/notifications/" + notification.id} className="text-reset small"><FontAwesomeIcon className="text-success mr-1" size="lg" fixedWidth icon={faShoppingCart} />New plan bought.</Link>;
                break;

            case 'App\\Notifications\\Deposit':
                message = <Link to={"/notifications/" + notification.id} className="text-reset small"><FontAwesomeIcon className="text-primary mr-1" size="lg" fixedWidth icon={faMoneyBillWaveAlt} />Deposit successfully made.</Link>;
                break;

            case 'App\\Notifications\\LimoPayment':
                message = <Link to={"/notifications/" + notification.id} className="text-reset small"><FontAwesomeIcon className="text-yellow mr-1" size="lg" fixedWidth icon={faPaperPlane} />Limo Payment successfully submitted.</Link>;
                break;

            case 'App\\Notifications\\LimoPaymentStatus':
                const { message: notificationMessage, status } = notification.data;
                if (status === 1) {
                    icon = <FontAwesomeIcon className="text-green mr-1" size="lg" fixedWidth icon={faCheck} />;
                } else if (status === 2) {
                    icon = <FontAwesomeIcon className="text-danger mr-1" size="lg" fixedWidth icon={faTimes} />;
                }
                message = <Link to={"/notifications/" + notification.id} className="text-reset small">{icon}{notificationMessage}</Link>;
                break;

            default:
                break;
        }

        return <DropdownItem key={'notification_' + notification.id} className="text-dark text-truncate border-top">
            {message}
        </DropdownItem>
    });

    const messageItems = messages.map(message => {
        return <DropdownItem key={'message_' + message.id} className="text-dark text-truncate border-top">
            {message.content}
        </DropdownItem>
    });

    const commentItems = comments.map(comment => {
        return <DropdownItem key={'comment_' + comment.id} className="text-dark border-top">
            {comment.content}
        </DropdownItem>
    });

    return <div className="px-3 bg-blue flex-fill d-flex align-items-center text-white text-large position-relative" style={{ height: 70 }}>
        <Nav className="mr-auto d-flex align-items-center" navbar>
            <FontAwesomeIcon icon={faBars} className="mr-3 mr-lg-5 ml-2 ml-lg-4" style={{ cursor: 'pointer' }} onClick={sidedrawerToggle} size="2x" />
            <div className="mr-4 d-none d-lg-block">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 text-yellow" />
                <span className="text-300">Today is</span> <strong>{weekDay} {day} {month} {year}</strong>
            </div>
            <div className="d-none d-lg-block">
                <FontAwesomeIcon icon={faClock} className="text-yellow mr-2" />
                <strong>TIME : {hours} : {minutes} : {seconds}</strong>
            </div>
        </Nav>
        <div className="ml-auto d-flex align-items-center">
            <div className="py-3 d-flex justify-content-between align-items-center">
                <UncontrolledDropdown inNavbar>
                    <DropdownToggle nav className="p-0">
                        <FontAwesomeIcon icon={faComments} className="text-light mr-3" size="lg" />
                        <Badge color="pink" className="position-absolute rounded-circle d-inline-flex justify-content-center align-items-center" style={{ width: 20, height: 20, transform: 'translate(-30px, -5px)', zIndex: 2 }}>{comments.length}</Badge>
                    </DropdownToggle>
                    <DropdownMenu right style={{ width: '20rem' }}>
                        {comments.length === 0 ? <DropdownItem disabled className="bg-dark text-white">
                            <div className="py-2">No comment.</div>
                        </DropdownItem> : <>
                                <DropdownItem disabled className="text-left pt-0 small">
                                    You have {comments.length} comments.
                                        </DropdownItem>
                                {commentItems}
                                <DropdownItem className="text-center pb-0 border-top">
                                    <Link className="text-reset small" to={"/comments"}>View all comments</Link>
                                </DropdownItem>
                            </>}
                    </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown inNavbar>
                    <DropdownToggle nav className="p-0">
                        <FontAwesomeIcon icon={faEnvelope} className="text-light mr-3" size="lg" />
                        <Badge color="green" className="position-absolute rounded-circle d-inline-flex justify-content-center align-items-center" style={{ width: 20, height: 20, transform: 'translate(-30px, -5px)', zIndex: 2 }}>{messages.length}</Badge>
                    </DropdownToggle>
                    <DropdownMenu right style={{ width: '20rem' }}>
                        {messages.length === 0 ? <DropdownItem disabled className="bg-dark text-white">
                            <div className="py-2">No message.</div>
                        </DropdownItem> : <>
                                <DropdownItem disabled className="text-left pt-0 small">
                                    You have {messages.length} messages.
                                </DropdownItem>
                                {messageItems}
                                <DropdownItem className="text-center pb-0 border-top">
                                    <Link className="text-reset small" to={"/messages"}>View all messages</Link>
                                </DropdownItem>
                            </>}
                    </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown inNavbar>
                    <DropdownToggle nav className="p-0">
                        <FontAwesomeIcon icon={faBell} className="text-light mr-3" size="lg" />
                        <Badge color="yellow" className="position-absolute rounded-circle d-inline-flex justify-content-center align-items-center" style={{ width: 20, height: 20, transform: 'translate(-30px, -5px)', zIndex: 2 }}>{notifications.length}</Badge>
                    </DropdownToggle>
                    <DropdownMenu right style={{ width: '20rem' }}>
                        {notifications.length === 0 ? <DropdownItem disabled className="bg-dark text-white">
                            <div className="py-2">No notification.</div>
                        </DropdownItem> : <>
                                <DropdownItem disabled className="text-left pt-0 small">
                                    You have {notifications.length} notifications.
                                        </DropdownItem>
                                {notificationItems}
                                <DropdownItem className="text-center pb-0 border-top">
                                    <Link className="text-reset small" to={"/notifications"}>View all notifications</Link>
                                </DropdownItem>
                            </>}
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>

            <div onClick={toggle} style={{ cursor: 'pointer' }} className="d-flex align-items-center ml-lg-5">
                <span className="d-none d-xl-inline">Sign out</span>
                <FontAwesomeIcon icon={faPowerOff} size="lg" className="ml-2 text-yellow" />
            </div>
        </div>

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Logout</ModalHeader>
            <ModalBody className="text-center">
                <p>Are you sure you want to logout?</p>
                <div>
                    <Button color="brokenblue" onClick={logoutHandler}>Logout <FontAwesomeIcon icon={faPowerOff} fixedWidth /></Button>{' '}
                    <Button color="orange" onClick={toggle}>Close <FontAwesomeIcon icon={faTimes} fixedWidth /></Button>
                </div>
            </ModalBody>
        </Modal>
    </div>;
}