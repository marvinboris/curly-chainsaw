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



// Admin routes
const asyncAdminDashboard = asyncComponent(() => import('./containers/Backend/Admin/Dashboard/Dashboard'));

const asyncAdminEmployees = asyncComponent(() => import('./containers/Backend/Admin/Employees'));
const asyncAdminEmployeesShow = asyncComponent(() => import('./containers/Backend/Admin/Employees/Show'));

const asyncAdminTasks = asyncComponent(() => import('./containers/Backend/Admin/Tasks'));

const asyncAdminCompanies = asyncComponent(() => import('./containers/Backend/Admin/Companies'));

const asyncAdminCountries = asyncComponent(() => import('./containers/Backend/Admin/Countries'));

const asyncAdminCities = asyncComponent(() => import('./containers/Backend/Admin/Cities'));

const asyncAdminAgencies = asyncComponent(() => import('./containers/Backend/Admin/Agencies'));

const asyncAdminEventTypes = asyncComponent(() => import('./containers/Backend/Admin/EventTypes'));

const asyncAdminJobs = asyncComponent(() => import('./containers/Backend/Admin/Jobs'));

const asyncAdminPriorities = asyncComponent(() => import('./containers/Backend/Admin/Priorities'));



// Common routes
const asyncUserLogin = asyncComponent(() => import('./containers/Auth/User/Login/Login'));
const asyncAdminLogin = asyncComponent(() => import('./containers/Auth/Admin/Login/Login'));
const asyncAdminVerify = asyncComponent(() => import('./containers/Auth/Admin/Verify/Verify'));

class App extends Component {
    componentDidMount() {
        const { onTryAuthSignup } = this.props;
        onTryAuthSignup();
        init();
    }

    render() {
        const { auth: { role } } = this.props;
        const isAuthenticated = localStorage.getItem('token') !== null;

        let routes = (
            <Switch>
                <Route path="/auth/admin/verify" component={asyncAdminVerify} />
                <Route path="/auth/admin/login" component={asyncAdminLogin} />
                <Redirect path="/admin" to="/auth/admin/login" />

                <Route path="/auth/user/login" component={asyncUserLogin} />

                <Redirect to="/auth/user/login" />
            </Switch>
        );

        if (isAuthenticated) {
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

                    <Route path="/admin/dashboard" component={asyncAdminDashboard} />
                    <Route path="/admin/tasks" component={asyncAdminTasks} />
                    <Route path="/admin/employees/:employeeId" component={asyncAdminEmployeesShow} />
                    <Route path="/admin/employees" component={asyncAdminEmployees} />
                    <Route path="/admin/companies" component={asyncAdminCompanies} />
                    <Route path="/admin/countries" component={asyncAdminCountries} />
                    <Route path="/admin/cities" component={asyncAdminCities} />
                    <Route path="/admin/agencies" component={asyncAdminAgencies} />
                    <Route path="/admin/event-types" component={asyncAdminEventTypes} />
                    <Route path="/admin/jobs" component={asyncAdminJobs} />
                    <Route path="/admin/priorities" component={asyncAdminPriorities} />

                    <Redirect to={`/${role}/dashboard`} />
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
