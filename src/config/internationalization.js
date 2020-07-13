import React from "react";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize";

import {I18nManager} from "react-native";

const translationGetters = {
    en: () => require("../lang/English"),
    ar: () => require("../lang/Arabic"),
    fil: () => require("../lang/Filipino"),
    fr: () => require('../lang/French'),
    bs: () => require('../lang/Bosnian'),
    cn: () => require('../lang/Chinese'),
    nl: () => require('../lang/Dutch'),
    de: () => require('../lang/German'),
    it: () => require('../lang/Italian'),
    ja: () => require('../lang/Japanese'),
    // ko: () => require('../lang/Korean'),
    pl: () => require('../lang/Polish'),
    pt: () => require('../lang/Portuguese-Brazil'),
    ru: () => require('../lang/Russian'),
    // sl: () => require('../lang/Slovenian'),
    es: () => require('../lang/Spanish'),
    // sv: () => require('../lang/Swedish'),
    uk: () => require('../lang/Ukrainian'),
    vi: () => require('../lang/Vietnamese')
};
const rtlLanguages = [
    'ar', 'arc', 'dv', 'fa', 'ha', 'he', 'khw', 'ks', 'ku', 'ps', 'ur', 'yi'
]

const translate = (key, config) => {
    let msg = i18n.t(key, config)
    // console.log('msg: ' + msg)
    if (missingTranslationRegex.test(msg)) {
        // console.log('yeah missing ')
       msg = i18n.t(key, 'en')
    }
    return msg
}
const missingTranslationRegex = /^\[missing ".*" translation\]$/


const fallback = {languageTag: "en", isRTL: false};

const setI18nConfig = () => {
    i18n.fallbacks = true
    i18n.translations = translationGetters
    i18n.defaultLocale = 'en'
    const currentLang = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters))
    const {languageTag, isRTL} = currentLang || fallback;
    I18nManager.forceRTL(isRTL);
};

const setLocale = (locale = 'en') => {
    i18n.locale = locale
    let translations = null
    if (translationGetters[locale]) {
        translations = translationGetters[locale]()
    }
    // console.log('translations: ', translations)
    i18n.translations = {[locale]: (translations || fallback)}
}

const getCurrentLocale = () => {
    return i18n.locale
}

const setDefaultLocale = (locale = 'en') => {
    i18n.defaultLocale = locale
}

const enableFallbacks = () => {
    i18n.fallbacks = true;
}

const getLocales = async () => {
    return await RNLocalize.getLocales()
}

const isRTL = () => {
    const currLocale = i18n.locale
    const item = RNLocalize.getLocales().find(item => item.languageTag === i18n.locale)
    let isRTL = false
    if (item && item.hasOwnProperty('isRTL')) {
        isRTL = item.isRTL
    } else {
        isRTL = rtlLanguages.includes(currLocale)
    }
    return isRTL
}

export default {
    enableFallbacks, setDefaultLocale,
    getCurrentLocale, setLocale,
    setI18nConfig, translate,
    getLocales, isRTL
}
