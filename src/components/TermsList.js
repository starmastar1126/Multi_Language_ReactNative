import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import OneTermFront from './OneTermFront';

const TermsList = ({results}) => {
    return (
        <View>
            <FlatList
                data= {results}
                numColumns = '2'
                renderItem = {({item}) => <OneTermFront item={item} />}
                keyExtractor = {(item) => item.sourceId}
                scrollEnabled= {false}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default TermsList;