import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from 'aos';

import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import * as actions from './store/actions';

import 'aos/dist/aos.css';

// User routes
const asyncUserDashboard = asyncComponent(() => import('./containers/Backend/User/Dashboard/Dashboard'));

const asyncUserAttendanceReport = asyncComponent(() => import('./containers/Backend/User/AttendanceReport'));

const asyncUserCalendar = asyncComponent(() => import('./containers/Backend/User/Calendar'));

const asyncUserTasks = asyncComponent(() => import('./containers/Backend/User/Tasks'));

const asyncUserMessages = asyncComponent(() => import('./containers/Backend/User/Messages'));
const asyncUserInboxMessages = asyncComponent(() => import('./containers/Backend/User/Messages/Inbox'));
const asyncUserSentMessages = asyncComponent(() => import('./containers/Backend/User/Messages/Sent'));
const asyncUserArchiveMessages = asyncComponent(() => import('./containers/Backend/User/Messages/Archive'));

// Common routes
const asyncUserLogin = asyncComponent(() => import('./containers/Auth/User/Login/Login'));
const asyncAdminVerify = asyncComponent(() => import('./containers/Auth/Admin/Verify/Verify'));

class App extends Component {
    componentDidMount() {
        const { onTryAuthSignup } = this.props;
        onTryAuthSignup();
        init();
    }

    render() {
        const { auth: { token } } = this.props;

        let routes = (
            <Switch>
                <Route path="/auth/admin/verify" component={asyncAdminVerify} />
                <Redirect path="/admin" to="/auth/admin/login" />
                
                <Route path="/auth/user/login" component={asyncUserLogin} />

                <Redirect to="/auth/user/login" />
            </Switch>
        );

        if (token !== null) {
            routes = (
                <Switch>
                    <Route path="/user/dashboard" component={asyncUserDashboard} />
                    <Route path="/user/calendar" component={asyncUserCalendar} />
                    <Route path="/user/attendance-report" component={asyncUserAttendanceReport} />
                    <Route path="/user/tasks" component={asyncUserTasks} />
                    <Route path="/user/messages/inbox" component={asyncUserInboxMessages} />
                    <Route path="/user/messages/sent" component={asyncUserSentMessages} />
                    <Route path="/user/messages/archive" component={asyncUserArchiveMessages} />
                    <Route path="/user/messages" component={asyncUserMessages} />

                    <Redirect to="/user/dashboard" />
                </Switch>
            );
        }

        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onTryAuthSignup: () => dispatch(actions.authCheckState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
