import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import OneIntroFront from './OneIntroFront';

const IntrosList = ({results}) => {
    return (
        <View>
            <Text>Preliminaries</Text>
            <FlatList
                data= {results}
                renderItem = {({item}) => <OneIntroFront item={item} />}
                keyExtractor = {(item) => item.sourceId}
                horizontal = {true}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default IntrosList;