import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const TermTitle = ({item, navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Article', { item: item })}>
                <View>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default withNavigation(TermTitle);