import * as actionTypes from './actionTypes';

const prefix = '/api/';

export const resetDashboard = () => ({ type: actionTypes.RESET_DASHBOARD });
const dashboardStart = () => ({ type: actionTypes.DASHBOARD_START });
const dashboardSuccess = data => ({ type: actionTypes.DASHBOARD_SUCCESS, ...data });
const dashboardFail = error => ({ type: actionTypes.DASHBOARD_FAIL, error });
export const getUserDashboard = () => async dispatch => {
    dispatch(dashboardStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/dashboard', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(dashboardSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(dashboardFail(error));
    }
};

export const resetRequests = () => ({ type: actionTypes.RESET_REQUESTS });
const requestsStart = () => ({ type: actionTypes.REQUESTS_START });
const requestsSuccess = data => ({ type: actionTypes.REQUESTS_SUCCESS, ...data });
const requestsFail = error => ({ type: actionTypes.REQUESTS_FAIL, error });
export const getRequests = () => async dispatch => {
    dispatch(requestsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'requests', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};

export const getImportantRequests = () => async dispatch => {
    dispatch(requestsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'requests/important', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};

export const getPendingRequests = () => async dispatch => {
    dispatch(requestsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'requests/pending', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};

export const getSolvedRequests = () => async dispatch => {
    dispatch(requestsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'requests/solved', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};

export const getCancelledRequests = () => async dispatch => {
    dispatch(requestsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'requests/cancelled', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};

export const postRequestUpdate = (id, data) => async dispatch => {
    dispatch(requestsStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'requests/' + id, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};

export const postRequestDelete = id => async dispatch => {
    dispatch(requestsStart());

    try {
        const res = await fetch(prefix + 'requests/' + id + '/delete', {
            method: 'POST',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};



export const resetAttendanceReport = () => ({ type: actionTypes.RESET_ATTENDANCE_REPORT });
const attendanceReportStart = () => ({ type: actionTypes.ATTENDANCE_REPORT_START });
const attendanceReportSuccess = data => ({ type: actionTypes.ATTENDANCE_REPORT_SUCCESS, ...data });
const attendanceReportFail = error => ({ type: actionTypes.ATTENDANCE_REPORT_FAIL, error });
export const getAttendanceReport = () => async dispatch => {
    dispatch(attendanceReportStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/attendance-report', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(attendanceReportSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(attendanceReportFail(error));
    }
};

export const postClock = () => async dispatch => {
    dispatch(attendanceReportStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/attendance-report/clock', {
            method: 'POST',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(attendanceReportSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(attendanceReportFail(error));
    }
};



export const resetTasks = () => ({ type: actionTypes.RESET_TASKS });
const tasksStart = () => ({ type: actionTypes.TASKS_START });
const tasksSuccess = data => ({ type: actionTypes.TASKS_SUCCESS, ...data });
const tasksFail = error => ({ type: actionTypes.TASKS_FAIL, error });
export const getTasks = () => async dispatch => {
    dispatch(tasksStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/tasks', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(tasksSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(tasksFail(error));
    }
};

export const postTaskUpdate = (id, data) => async dispatch => {
    dispatch(tasksStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/tasks/' + id, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(tasksSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(tasksFail(error));
    }
};

export const postTaskDelete = id => async dispatch => {
    dispatch(tasksStart());

    try {
        const res = await fetch(prefix + 'user/tasks/' + id + '/delete', {
            method: 'POST',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(tasksSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(tasksFail(error));
    }
};



export const resetMessages = () => ({ type: actionTypes.RESET_MESSAGES });
const messagesStart = () => ({ type: actionTypes.MESSAGES_START });
const messagesSuccess = data => ({ type: actionTypes.MESSAGES_SUCCESS, ...data });
const messagesFail = error => ({ type: actionTypes.MESSAGES_FAIL, error });
export const getMessages = () => async dispatch => {
    dispatch(messagesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/messages', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(messagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(messagesFail(error));
    }
};

export const getInboxMessages = () => async dispatch => {
    dispatch(messagesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/messages/inbox', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(messagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(messagesFail(error));
    }
};

export const getSentMessages = () => async dispatch => {
    dispatch(messagesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/messages/sent', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(messagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(messagesFail(error));
    }
};

export const getArchiveMessages = () => async dispatch => {
    dispatch(messagesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/messages/archive', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(messagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(messagesFail(error));
    }
};

export const postMessageUpdate = (id, data) => async dispatch => {
    dispatch(messagesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/messages/' + id, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(messagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(messagesFail(error));
    }
};

export const postMessageDelete = id => async dispatch => {
    dispatch(messagesStart());

    try {
        const res = await fetch(prefix + 'user/messages/' + id + '/delete', {
            method: 'POST',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(messagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(messagesFail(error));
    }
};



export const resetCalendar = () => ({ type: actionTypes.RESET_CALENDAR });
const calendarStart = () => ({ type: actionTypes.CALENDAR_START });
const calendarSuccess = data => ({ type: actionTypes.CALENDAR_SUCCESS, ...data });
const calendarFail = error => ({ type: actionTypes.CALENDAR_FAIL, error });
export const getCalendar = () => async dispatch => {
    dispatch(calendarStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/calendar', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(calendarSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(calendarFail(error));
    }
};

export const getEventTypes = () => async dispatch => {
    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/calendar/event-types', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(calendarSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(calendarFail(error));
    }
}

export const postEventAdd = data => async dispatch => {
    dispatch(calendarStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/calendar/', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(calendarSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(calendarFail(error));
    }
};

export const postCalendarUpdate = (id, data) => async dispatch => {
    dispatch(calendarStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/calendar/' + id, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(calendarSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(calendarFail(error));
    }
};

export const postCalendarDelete = id => async dispatch => {
    dispatch(calendarStart());

    try {
        const res = await fetch(prefix + 'user/calendar/' + id + '/delete', {
            method: 'POST',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(calendarSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(calendarFail(error));
    }
};


// Chat
export const resetChat = () => ({ type: actionTypes.RESET_CHAT });
const chatStart = () => ({ type: actionTypes.CHAT_START });
const chatSuccess = data => ({ type: actionTypes.CHAT_SUCCESS, ...data });
const chatMessageSuccess = data => ({ type: actionTypes.CHAT_MESSAGE_SUCCESS, data });
const chatFail = error => ({ type: actionTypes.CHAT_FAIL, error });
export const getRequestsWithMessages = () => async dispatch => {
    dispatch(chatStart());
    const token = localStorage.getItem('token');
    try {
        const res = await fetch(prefix + 'chat/requests', {
            headers: {
                Authorization: token
            }
        });

        const resData = await res.json();

        dispatch(chatSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(chatFail(error));
    }
};

export const getRequestMessages = id => async dispatch => {
    const token = localStorage.getItem('token');
    try {
        const res = await fetch(prefix + 'chat/requests/' + id, {
            headers: {
                Authorization: token
            }
        });

        const resData = await res.json();

        dispatch(chatSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(chatFail(error));
    }
};

export const postChatSubmitMessage = (data, cb) => async dispatch => {
    const token = localStorage.getItem('token');
    try {
        const form = new FormData(data);
        const res = await fetch(prefix + 'chat/message', {
            method: 'POST',
            headers: {
                Authorization: token
            },
            body: form
        });

        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));

        dispatch(chatMessageSuccess(resData));
        cb();
    } catch (error) {
        console.log(error);
        dispatch(chatFail(error));
    }
};