import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import { filterTitlesByTermId } from '../hooks/hooks';
import TermTitle from '../components/TermTitle';
// import useResults from '../hooks/useResults';
// const results = useResults();
import internationalization from "../config/internationalization";


const TermTitlesScreen = ({ navigation }) => {
    const termId = navigation.getParam('termId');
    const [titles, setTitles] = useState(null);

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
        setTitles(filterTitlesByTermId(results, termId));
    }, []);
    return (
        <View>
        <Text>{termId}</Text>
        <FlatList
            data={titles}
            renderItem = {({item}) => <TermTitle item={item}/>}
            keyExtractor = {(item) => item.body + item.sourceId}
        />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default TermTitlesScreen;