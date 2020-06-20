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
    messages: {
        loading: false,
        error: null
    },
    requests: {
        loading: false,
        error: null
    },
    chat: {
        loading: false,
        error: null
    },
};

const resetDashboard = (state, action) => updateObject(state, { dashboard: initialState.dashboard });
const dashboardStart = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: true, message: null }) });
const dashboardSuccess = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, error: null, ...action }) });
const dashboardFail = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, ...action }) });

const resetCalendar = (state, action) => updateObject(state, { calendar: initialState.calendar });
const calendarStart = (state, action) => updateObject(state, { calendar: updateObject(state.calendar, { loading: true, message: null }) });
const calendarSuccess = (state, action) => updateObject(state, { calendar: updateObject(state.calendar, { loading: false, error: null, ...action }) });
const calendarFail = (state, action) => updateObject(state, { calendar: updateObject(state.calendar, { loading: false, ...action }) });

const resetAttendanceReport = (state, action) => updateObject(state, { attendanceReport: initialState.attendanceReport });
const attendanceReportStart = (state, action) => updateObject(state, { attendanceReport: updateObject(state.attendanceReport, { loading: true, message: null }) });
const attendanceReportSuccess = (state, action) => updateObject(state, { attendanceReport: updateObject(state.attendanceReport, { loading: false, error: null, ...action }) });
const attendanceReportFail = (state, action) => updateObject(state, { attendanceReport: updateObject(state.attendanceReport, { loading: false, ...action }) });

const resetTasks = (state, action) => updateObject(state, { tasks: initialState.tasks });
const tasksStart = (state, action) => updateObject(state, { tasks: updateObject(state.tasks, { loading: true, message: null }) });
const tasksSuccess = (state, action) => updateObject(state, { tasks: updateObject(state.tasks, { loading: false, error: null, ...action }) });
const tasksFail = (state, action) => updateObject(state, { tasks: updateObject(state.tasks, { loading: false, ...action }) });

const resetMessages = (state, action) => updateObject(state, { messages: initialState.messages });
const messagesStart = (state, action) => updateObject(state, { messages: updateObject(state.messages, { loading: true, message: null }) });
const messagesSuccess = (state, action) => updateObject(state, { messages: updateObject(state.messages, { loading: false, error: null, ...action }) });
const messagesFail = (state, action) => updateObject(state, { messages: updateObject(state.messages, { loading: false, ...action }) });

const resetRequests = (state, action) => updateObject(state, { requests: initialState.requests });
const requestsStart = (state, action) => updateObject(state, { requests: updateObject(state.requests, { loading: true, message: null }) });
const requestsSuccess = (state, action) => updateObject(state, { requests: updateObject(state.requests, { loading: false, error: null, ...action }) });
const requestsFail = (state, action) => updateObject(state, { requests: updateObject(state.requests, { loading: false, ...action }) });

const resetChat = (state, action) => updateObject(state, { chat: initialState.chat });
const chatStart = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: true, message: null }) });
const chatSuccess = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, error: null, ...action }) });
const chatMessageSuccess = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, error: null }) });
const chatFail = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESET_DASHBOARD: return resetDashboard(state, action);
        case actionTypes.DASHBOARD_START: return dashboardStart(state, action);
        case actionTypes.DASHBOARD_SUCCESS: return dashboardSuccess(state, action);
        case actionTypes.DASHBOARD_FAIL: return dashboardFail(state, action);

        case actionTypes.RESET_CALENDAR: return resetCalendar(state, action);
        case actionTypes.CALENDAR_START: return calendarStart(state, action);
        case actionTypes.CALENDAR_SUCCESS: return calendarSuccess(state, action);
        case actionTypes.CALENDAR_FAIL: return calendarFail(state, action);

        case actionTypes.RESET_TASKS: return resetTasks(state, action);
        case actionTypes.TASKS_START: return tasksStart(state, action);
        case actionTypes.TASKS_SUCCESS: return tasksSuccess(state, action);
        case actionTypes.TASKS_FAIL: return tasksFail(state, action);

        case actionTypes.RESET_ATTENDANCE_REPORT: return resetAttendanceReport(state, action);
        case actionTypes.ATTENDANCE_REPORT_START: return attendanceReportStart(state, action);
        case actionTypes.ATTENDANCE_REPORT_SUCCESS: return attendanceReportSuccess(state, action);
        case actionTypes.ATTENDANCE_REPORT_FAIL: return attendanceReportFail(state, action);

        case actionTypes.RESET_MESSAGES: return resetMessages(state, action);
        case actionTypes.MESSAGES_START: return messagesStart(state, action);
        case actionTypes.MESSAGES_SUCCESS: return messagesSuccess(state, action);
        case actionTypes.MESSAGES_FAIL: return messagesFail(state, action);

        case actionTypes.RESET_REQUESTS: return resetRequests(state, action);
        case actionTypes.REQUESTS_START: return requestsStart(state, action);
        case actionTypes.REQUESTS_SUCCESS: return requestsSuccess(state, action);
        case actionTypes.REQUESTS_FAIL: return requestsFail(state, action);

        case actionTypes.RESET_CHAT: return resetChat(state, action);
        case actionTypes.CHAT_START: return chatStart(state, action);
        case actionTypes.CHAT_SUCCESS: return chatSuccess(state, action);
        case actionTypes.CHAT_MESSAGE_SUCCESS: return chatMessageSuccess(state, action);
        case actionTypes.CHAT_FAIL: return chatFail(state, action);

        default: return state;
    }
};