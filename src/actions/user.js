import { USER_INFO, USER_LOGIN, USER_UPDATE } from '@constants/user';
import { API_USER_INFO, API_USER_LOGIN } from '@constants/api';
import { createAction } from '@utils/redux';

/**
 * 用户登录
 * @param {*} payload
 */
export const dispatchUserLogin = payload => createAction({
    url: API_USER_LOGIN,
    method: 'POST',
    type: USER_LOGIN,
    payload
});

/**
 * 获取用户信息
 * @param {*} payload
 */
export const dispatchUserInfo = payload => createAction({
    url: API_USER_INFO,
    method: 'POST',
    fetchOptions: {
        showToast: false,
        autoLogin: false
    },
    type: USER_INFO,
    payload
});

/**
 * 更新用户信息
 * @param {*} payload
 */
export const dispatchUserUpdate = payload => createAction({
    url: API_USER_UPDATE,
    method: 'POST',
    type: USER_UPDATE,
    payload
});
