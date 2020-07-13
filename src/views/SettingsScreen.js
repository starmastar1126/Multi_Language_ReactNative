import React from 'react';
import {StyleSheet, View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Load sample language data list
const LanguageData = require('../lang/Languages.json');
import internationalization from "../config/internationalization";
import { NavigationActions } from 'react-navigation';
import { StackActions } from 'react-navigation';


class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: LanguageData.map(item => {
                return { ...item, checked: item.code === props.lang }
            }),
            loading: false
        };
    }
    onChange(select) {
        internationalization.setLocale(select.code)
        internationalization.setI18nConfig()
        this.setState({
            language: this.state.language.map(item => {
                if (item.language == select.language) {
                    return { ...item, checked: true };
                } else {
                    return { ...item, checked: false };
                }
            })
        });
        this.props.navigation.dispatch(StackActions.reset(
            {
                index: 0,
                title: 'New Muslim Guide',
                actions: [NavigationActions.navigate({ routeName: 'Front' })]
            }
        ))
    }

    render() {
        return (
            <View>
                <View style={{ width: wp('100.0%'), height: 50, borderBottomWidth: 1, borderColor: '#eee', paddingTop: 10}}>
                    <Text style={{textAlign: 'center', fontSize: 20}}>Select Language</Text>
                </View>
                <FlatList
                    data={LanguageData}
                    renderItem = {({item}) => (
                        <TouchableOpacity onPress={() => this.onChange(item)}>
                            <View style={styles.languageItem}>
                                <Image source={
                                    item.language == "English" ? require('../assets/flag/English.png') :
                                    item.language == "Arabic" ? require('../assets/flag/Arabic.png') :
                                    item.language == "Filipino" ? require('../assets/flag/Filipino.png') :
                                    item.language == "French" ? require('../assets/flag/French.png') :
                                    item.language == "Bosnian" ? require('../assets/flag/Bosnian.png') :
                                    item.language == "Chinese" ? require('../assets/flag/Chinese.png') :
                                    item.language == "Dutch" ? require('../assets/flag/Dutch.png') :
                                    item.language == "German" ? require('../assets/flag/German.png') :
                                    item.language == "Italian" ? require('../assets/flag/Italian.png') :
                                    item.language == "Japanese" ? require('../assets/flag/Japanese.png') :
                                    item.language == "Korean" ? require('../assets/flag/Korean.png') :
                                    item.language == "Polish" ? require('../assets/flag/Polish.png') :
                                    item.language == "Portuguese-Brazil" ? require('../assets/flag/Portuguese-Brazil.png') :
                                    item.language == "Russian" ? require('../assets/flag/Russian.png') :
                                    item.language == "Slovenian" ? require('../assets/flag/Slovenian.png') :
                                    item.language == "Spanish" ? require('../assets/flag/Spanish.png') :
                                    item.language == "Swedish" ? require('../assets/flag/Swedish.png') :
                                    item.language == "Ukrainian" ? require('../assets/flag/Ukrainian.png') :
                                    item.language == "Vietnamese" ? require('../assets/flag/Vietnamese.png') :
                                    require('../assets/flag/English.png')
                                    } style={{width: 40, height: 30, marginRight: 5}}/>
                                <Text>{item.nativeName}</Text>
                                {/* {item.checked && (
                                    <Image source={require('../assets/flag/English.png')} style={{width: 20, height: 20, marginRight: 5}}/>
                                )} */}
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor = {(item) => item.code}
                    style={{marginBottom: 50}}
                />
            </View>
        );}
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8'
    }, 
    languageItem: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: wp('100.0%'),
        height: 50,
        paddingLeft: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#eee',
    }
});

export default SettingsScreen;