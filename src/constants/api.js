/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
/* eslint-disable */
export const host = 'http://192.168.0.103:7001';
export const hostM = '';
/* eslint-enable */

export const API_USER_LOGIN = `${host}/wx/user/login`;
export const API_USER_INFO = `${host}/wx/user/info`;
export const API_USER_UPDATE = `${host}/wx/user/update`;