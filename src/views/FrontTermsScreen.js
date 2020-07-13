import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { filterResultsByTermId, filterResultsToGetIntros } from '../hooks/hooks'
import TermsList from '../components/TermsList';
import IntrosList from '../components/IntrosList';
import settings from '../assets/settings.png';
import info from '../assets/info.png';
// import useResults from '../hooks/useResults';
// const results = useResults();
import internationalization from "../config/internationalization";

const FrontTermsScreen = () => {
    
    const [firstTerms, setFirstTerms] = useState(null);
    const [secondTerms, setSecondTerms] = useState(null);
    const [intros, setIntros] = useState(null);

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
        setFirstTerms(filterResultsByTermId(results, 6));
        setSecondTerms(filterResultsByTermId(results, 12));
        setIntros(filterResultsToGetIntros(results));
    }, []);

    // const forceUpdate = useCallback(() => setFirstTerms({}), []);

    return (
        <View style={styles.container}>
            <TermsList results={firstTerms}/>
            <IntrosList results={intros}/>
            <TermsList results={secondTerms}/>
        </View>
    );
}

FrontTermsScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight:<TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{marginRight: 15}}>
                        <Image source={settings} style={{width: 25, height: 25}}/>
                    </TouchableOpacity>,
        headerLeft: <TouchableOpacity onPress={() => navigation.navigate('About')} style={{marginLeft: 15}}>
                        <Image source={info} style={{width: 25, height: 25}}/>
                    </TouchableOpacity>,
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8'
    }
});

export default FrontTermsScreen;