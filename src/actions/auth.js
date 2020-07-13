import * as actionTypes from "./actionTypes";

const onLogin = data => {
    return {
        type: actionTypes.LOGIN,
        data
    };
};

const onChangeLanguage = (lang = 'en') => {
    console.log('in-onChangeLanguage', lang)
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        lang
    }
}

export const authentication = (login, callback) => dispatch => {
    //call api and dispatch action case
    setTimeout(() => {
        let data = {
            success: login
        };
        dispatch(onLogin(data));
        if (typeof callback === "function") {
            callback({ success: true });
        }
    }, 500);
};

export const changeAppLanguage = (lang) => dispatch => {
    console.log('in-changeAppLanguage', lang)
    dispatch(onChangeLanguage(lang));
};
