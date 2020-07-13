import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

import images from '../assets/terms_icons';

const OneTermFront = ({item, navigation}) => {
    return (
        <TouchableOpacity  style={styles.touchable} onPress={() => navigation.navigate('Titles', {termId: item.termId})}>
            <View style={styles.view}>
                <Image style={styles.image} source={images[item.termId]}/>
                <Text style={styles.term}>{item.term}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 90,
    },
    touchable:{
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: 5,
        flex: 1,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 1,
    },
    image: {
        width: 30,
        marginHorizontal: 10,
        resizeMode: 'contain'
    },
    term: {
        flexShrink: 1
    }
});

export default withNavigation(OneTermFront);