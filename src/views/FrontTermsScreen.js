import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { filterResultsByTermId, filterResultsToGetIntros } from '../hooks/hooks'
import TermsList from '../components/TermsList';
import IntrosList from '../components/IntrosList';
// import { Feather } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons';
import settings from '../assets/settings.png';
import info from '../assets/info.png';

const FrontTermsScreen = () => {
    
    const [firstTerms, setFirstTerms] = useState(null);
    const [secondTerms, setSecondTerms] = useState(null);
    const [intros, setIntros] = useState(null);

    useEffect(()=>{
        setFirstTerms(filterResultsByTermId(6));
        setSecondTerms(filterResultsByTermId(12));
        setIntros(filterResultsToGetIntros());
    }, []);
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