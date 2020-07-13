import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import { filterTitlesByTermId } from '../hooks/hooks';
import TermTitle from '../components/TermTitle';

const TermTitlesScreen = ({ navigation }) => {
    const termId = navigation.getParam('termId');
    const [titles, setTitles] = useState(null);

    useEffect(()=>{
        setTitles(filterTitlesByTermId(termId));
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