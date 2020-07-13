import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

import images from '../assets/head';


const OneIntroFront = ({item, navigation}) => {
    return (
        <TouchableOpacity  style={styles.touchable} onPress={() => navigation.navigate('Article', { item: item })}>
            <ImageBackground style={styles.imagBackground} source={images[item.sourceId]}>
                <Text style={styles.term}>{item.title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    imagBackground: {
        width: 250,
        height: 130,
        flexDirection: 'row'
    },
    touchable:{
        overflow: 'hidden',
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: 5,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 1,
    },
    term: {
        flexShrink: 1,
        alignSelf: 'flex-end',
        color: '#fff',
        margin: 10
    }
});

export default withNavigation(OneIntroFront);