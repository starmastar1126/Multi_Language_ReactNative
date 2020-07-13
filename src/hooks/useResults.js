import React from 'react';
import internationalization from "../config/internationalization";

export default () => {
    // alert(internationalization.getCurrentLocale())
    let bookData=[];
    if(internationalization.getCurrentLocale() == 'en') {
        bookData = require('../lang/Default.json');
    } else if(internationalization.getCurrentLocale() == 'ar') {
        bookData = require('../lang/Arabic.json');
    } else if(internationalization.getCurrentLocale() == 'fil') {
        bookData = require('../lang/Filipino.json');
    } else if(internationalization.getCurrentLocale() == 'fr') {
        bookData = require('../lang/French.json');
    } else if(internationalization.getCurrentLocale() == 'bs') {
        bookData = require('../lang/Bosnian.json');
    } else if(internationalization.getCurrentLocale() == 'cn') {
        bookData = require('../lang/Chinese.json');
    } else if(internationalization.getCurrentLocale() == 'nl') {
        bookData = require('../lang/Dutch.json');
    } else if(internationalization.getCurrentLocale() == 'de') {
        bookData = require('../lang/German.json');
    } else if(internationalization.getCurrentLocale() == 'it') {
        bookData = require('../lang/Italian.json');
    } else if(internationalization.getCurrentLocale() == 'ja') {
        bookData = require('../lang/Japanese.json');
    } else if(internationalization.getCurrentLocale() == 'pl') {
        bookData = require('../lang/Polish.json');
    } else if(internationalization.getCurrentLocale() == 'pt') {
        bookData = require('../lang/Portuguese-Brazil.json');
    } else if(internationalization.getCurrentLocale() == 'ru') {
        bookData = require('../lang/Russian.json');
    } else if(internationalization.getCurrentLocale() == 'es') {
        bookData = require('../lang/Spanish.json');
    } else if(internationalization.getCurrentLocale() == 'uk') {
        bookData = require('../lang/Ukrainian.json');
    } else if(internationalization.getCurrentLocale() == 'vi') {
        bookData = require('../lang/Vietnamese.json');
    } else{
        bookData = require('../lang/Default.json');
    }
    return bookData;
}