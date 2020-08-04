import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    dashboard: {
        loading: false,
        error: null
    },
    calendar: {
        loading: false,
        error: null
    },
    attendanceReport: {
        loading: false,
        error: null
    },
    tasks: {
        loading: false,
        error: null
    },
    agencies: {
        loading: false,
        error: null
    },
    employees: {
        loading: false,
        error: null
    },
    eventTypes: {
        loading: false,
        error: null
    },
    jobs: {
        loading: false,
        error: null
    },
    priorities: {
        loading: false,
        error: null
    },
    messages: {
        loading: false,
        error: null
    },
    chat: {
        loading: false,
        error: null
    },
};

const dashboardReset = (state, action) => updateObject(state, { dashboard: initialState.dashboard });
const dashboardStart = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: true, message: null }) });
const dashboardSuccess = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, error: null, ...action }) });
const dashboardFail = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, ...action }) });

const calendarReset = (state, action) => updateObject(state, { calendar: initialState.calendar });
const calendarStart = (state, action) => updateObject(state, { calendar: updateObject(state.calendar, { loading: true, message: null }) });
const calendarSuccess = (state, action) => updateObject(state, { calendar: updateObject(state.calendar, { loading: false, error: null, ...action }) });
const calendarFail = (state, action) => updateObject(state, { calendar: updateObject(state.calendar, { loading: false, ...action }) });

const attendanceReportReset = (state, action) => updateObject(state, { attendanceReport: initialState.attendanceReport });
const attendanceReportStart = (state, action) => updateObject(state, { attendanceReport: updateObject(state.attendanceReport, { loading: true, message: null }) });
const attendanceReportSuccess = (state, action) => updateObject(state, { attendanceReport: updateObject(state.attendanceReport, { loading: false, error: null, ...action }) });
const attendanceReportFail = (state, action) => updateObject(state, { attendanceReport: updateObject(state.attendanceReport, { loading: false, ...action }) });

const tasksReset = (state, action) => updateObject(state, { tasks: initialState.tasks });
const tasksStart = (state, action) => updateObject(state, { tasks: updateObject(state.tasks, { loading: true, message: null }) });
const tasksSuccess = (state, action) => updateObject(state, { tasks: updateObject(state.tasks, { loading: false, error: null, ...action }) });
const tasksFail = (state, action) => updateObject(state, { tasks: updateObject(state.tasks, { loading: false, ...action }) });

const agenciesReset = (state, action) => updateObject(state, { agencies: initialState.agencies });
const agenciesStart = (state, action) => updateObject(state, { agencies: updateObject(state.agencies, { loading: true, message: null }) });
const agenciesSuccess = (state, action) => updateObject(state, { agencies: updateObject(state.agencies, { loading: false, error: null, ...action }) });
const agenciesFail = (state, action) => updateObject(state, { agencies: updateObject(state.agencies, { loading: false, ...action }) });

const employeesReset = (state, action) => updateObject(state, { employees: initialState.employees });
const employeesStart = (state, action) => updateObject(state, { employees: updateObject(state.employees, { loading: true, message: null }) });
const employeesSuccess = (state, action) => updateObject(state, { employees: updateObject(state.employees, { loading: false, error: null, ...action }) });
const employeesFail = (state, action) => updateObject(state, { employees: updateObject(state.employees, { loading: false, ...action }) });

const eventTypesReset = (state, action) => updateObject(state, { eventTypes: initialState.eventTypes });
const eventTypesStart = (state, action) => updateObject(state, { eventTypes: updateObject(state.eventTypes, { loading: true, message: null }) });
const eventTypesSuccess = (state, action) => updateObject(state, { eventTypes: updateObject(state.eventTypes, { loading: false, error: null, ...action }) });
const eventTypesFail = (state, action) => updateObject(state, { eventTypes: updateObject(state.eventTypes, { loading: false, ...action }) });

const jobsReset = (state, action) => updateObject(state, { jobs: initialState.jobs });
const jobsStart = (state, action) => updateObject(state, { jobs: updateObject(state.jobs, { loading: true, message: null }) });
const jobsSuccess = (state, action) => updateObject(state, { jobs: updateObject(state.jobs, { loading: false, error: null, ...action }) });
const jobsFail = (state, action) => updateObject(state, { jobs: updateObject(state.jobs, { loading: false, ...action }) });

const prioritiesReset = (state, action) => updateObject(state, { priorities: initialState.priorities });
const prioritiesStart = (state, action) => updateObject(state, { priorities: updateObject(state.priorities, { loading: true, message: null }) });
const prioritiesSuccess = (state, action) => updateObject(state, { priorities: updateObject(state.priorities, { loading: false, error: null, ...action }) });
const prioritiesFail = (state, action) => updateObject(state, { priorities: updateObject(state.priorities, { loading: false, ...action }) });

const messagesReset = (state, action) => updateObject(state, { messages: initialState.messages });
const messagesStart = (state, action) => updateObject(state, { messages: updateObject(state.messages, { loading: true, message: null }) });
const messagesSuccess = (state, action) => updateObject(state, { messages: updateObject(state.messages, { loading: false, error: null, ...action }) });
const messagesFail = (state, action) => updateObject(state, { messages: updateObject(state.messages, { loading: false, ...action }) });

const chatReset = (state, action) => updateObject(state, { chat: initialState.chat });
const chatStart = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: true, message: null }) });
const chatSuccess = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, error: null, ...action }) });
const chatMessageSuccess = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, error: null }) });
const chatFail = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DASHBOARD_RESET: return dashboardReset(state, action);
        case actionTypes.DASHBOARD_START: return dashboardStart(state, action);
        case actionTypes.DASHBOARD_SUCCESS: return dashboardSuccess(state, action);
        case actionTypes.DASHBOARD_FAIL: return dashboardFail(state, action);

        case actionTypes.CALENDAR_RESET: return calendarReset(state, action);
        case actionTypes.CALENDAR_START: return calendarStart(state, action);
        case actionTypes.CALENDAR_SUCCESS: return calendarSuccess(state, action);
        case actionTypes.CALENDAR_FAIL: return calendarFail(state, action);

        case actionTypes.TASKS_RESET: return tasksReset(state, action);
        case actionTypes.TASKS_START: return tasksStart(state, action);
        case actionTypes.TASKS_SUCCESS: return tasksSuccess(state, action);
        case actionTypes.TASKS_FAIL: return tasksFail(state, action);

        case actionTypes.AGENCIES_RESET: return agenciesReset(state, action);
        case actionTypes.AGENCIES_START: return agenciesStart(state, action);
        case actionTypes.AGENCIES_SUCCESS: return agenciesSuccess(state, action);
        case actionTypes.AGENCIES_FAIL: return agenciesFail(state, action);

        case actionTypes.EMPLOYEES_RESET: return employeesReset(state, action);
        case actionTypes.EMPLOYEES_START: return employeesStart(state, action);
        case actionTypes.EMPLOYEES_SUCCESS: return employeesSuccess(state, action);
        case actionTypes.EMPLOYEES_FAIL: return employeesFail(state, action);

        case actionTypes.EVENT_TYPES_RESET: return eventTypesReset(state, action);
        case actionTypes.EVENT_TYPES_START: return eventTypesStart(state, action);
        case actionTypes.EVENT_TYPES_SUCCESS: return eventTypesSuccess(state, action);
        case actionTypes.EVENT_TYPES_FAIL: return eventTypesFail(state, action);

        case actionTypes.JOBS_RESET: return jobsReset(state, action);
        case actionTypes.JOBS_START: return jobsStart(state, action);
        case actionTypes.JOBS_SUCCESS: return jobsSuccess(state, action);
        case actionTypes.JOBS_FAIL: return jobsFail(state, action);

        case actionTypes.PRIORITIES_RESET: return prioritiesReset(state, action);
        case actionTypes.PRIORITIES_START: return prioritiesStart(state, action);
        case actionTypes.PRIORITIES_SUCCESS: return prioritiesSuccess(state, action);
        case actionTypes.PRIORITIES_FAIL: return prioritiesFail(state, action);

        case actionTypes.ATTENDANCE_REPORT_RESET: return attendanceReportReset(state, action);
        case actionTypes.ATTENDANCE_REPORT_START: return attendanceReportStart(state, action);
        case actionTypes.ATTENDANCE_REPORT_SUCCESS: return attendanceReportSuccess(state, action);
        case actionTypes.ATTENDANCE_REPORT_FAIL: return attendanceReportFail(state, action);

        case actionTypes.MESSAGES_RESET: return messagesReset(state, action);
        case actionTypes.MESSAGES_START: return messagesStart(state, action);
        case actionTypes.MESSAGES_SUCCESS: return messagesSuccess(state, action);
        case actionTypes.MESSAGES_FAIL: return messagesFail(state, action);

        case actionTypes.CHAT_RESET: return chatReset(state, action);
        case actionTypes.CHAT_START: return chatStart(state, action);
        case actionTypes.CHAT_SUCCESS: return chatSuccess(state, action);
        case actionTypes.CHAT_MESSAGE_SUCCESS: return chatMessageSuccess(state, action);
        case actionTypes.CHAT_FAIL: return chatFail(state, action);

        default: return state;
    }
};