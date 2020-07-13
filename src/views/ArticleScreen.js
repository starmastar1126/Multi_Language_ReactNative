import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import { getBody } from '../hooks/bodyFiltering';

const ArticleScreen = ({navigation}) => {
    const [body, setBody] = useState([]);
    const articleData = navigation.getParam('item');
    useEffect(()=>{
        setBody(getBody('body1', articleData.sourceId));
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