import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import { getBody } from '../hooks/bodyFiltering';
// import useResults from '../hooks/useResults';
// const results = useResults();
import internationalization from "../config/internationalization";

const ArticleScreen = ({navigation}) => {
    const [body, setBody] = useState([]);
    const articleData = navigation.getParam('item');

    let results=[];
    if(internationalization.getCurrentLocale() == 'en') {
        results = require('../lang/Default.json');
    } else if(internationalization.getCurrentLocale() == 'ar') {
        results = require('../lang/Arabic.json');
    } else if(internationalization.getCurrentLocale() == 'fil') {
        results = require('../lang/Filipino.json');
    } else if(internationalization.getCurrentLocale() == 'fr') {
        results = require('../lang/French.json');
    } else if(internationalization.getCurrentLocale() == 'bs') {
        results = require('../lang/Bosnian.json');
    } else if(internationalization.getCurrentLocale() == 'cn') {
        results = require('../lang/Chinese.json');
    } else if(internationalization.getCurrentLocale() == 'nl') {
        results = require('../lang/Dutch.json');
    } else if(internationalization.getCurrentLocale() == 'de') {
        results = require('../lang/German.json');
    } else if(internationalization.getCurrentLocale() == 'it') {
        results = require('../lang/Italian.json');
    } else if(internationalization.getCurrentLocale() == 'ja') {
        results = require('../lang/Japanese.json');
    } else if(internationalization.getCurrentLocale() == 'pl') {
        results = require('../lang/Polish.json');
    } else if(internationalization.getCurrentLocale() == 'pt') {
        results = require('../lang/Portuguese-Brazil.json');
    } else if(internationalization.getCurrentLocale() == 'ru') {
        results = require('../lang/Russian.json');
    } else if(internationalization.getCurrentLocale() == 'es') {
        results = require('../lang/Spanish.json');
    } else if(internationalization.getCurrentLocale() == 'uk') {
        results = require('../lang/Ukrainian.json');
    } else if(internationalization.getCurrentLocale() == 'vi') {
        results = require('../lang/Vietnamese.json');
    } else{
        results = require('../lang/Default.json');
    }

    useEffect(()=>{
        setBody(getBody(results, 'body1', articleData.sourceId));
    }, []);

    return (
        <ScrollView>
            <Text style={styles.header}>{articleData.title}</Text>
            {body}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
    }
})

export default ArticleScreen;