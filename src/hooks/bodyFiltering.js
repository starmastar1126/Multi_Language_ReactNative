import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
// import useResults from '../hooks/useResults';
import HTMLView from 'react-native-htmlview';

import images from '../assets/book-images';

// const results = useResults();

let counter = 0;

// get body (ArticleScreen)
export const getBody = (results, bodyKey, sourceId) => {

    let body = results.filter(r => r.sourceId == sourceId).map(a => a[bodyKey]).toString();
    let orderLest = false;
    let dottedtBox = false;
    body = body.split('||')
    .map((a, i) => {
        dottedtBox = a.includes('dotted-box') ? true : dottedtBox;
        // check if list ordered or unordered
        if(a.includes('<ol')){
            orderList = true;
        } else if (a.includes('<ul')){
            orderList = false;
        }

        
        // remove tags
        if (a == '<ol>' || a =='<ul>' || a.includes('<div')) {
            return false;
        }
        // replae tage to components
        // h2
        if(a.startsWith('<h2>')){
            return <Text key={i} style={styles.h2}>{ a.split('<h2>') }</Text>
        }
        // h3
        else if (a.startsWith('<h3>')){
            return <Text key={i} style={styles.h3}>{ a.split('<h3>') }</Text>
        }
        // h4
        else if (a.startsWith('<h4>')){
            return <Text key={i} style={styles.h4}>{ a.split('<h4>') }</Text>
        }
        // p
        else if (a.startsWith('<p')){
            a = a.replace(/<p.*?>/g, '');
            if (dottedtBox){
                dottedtBox = false;
                return (
                <View key={i} style={styles.dottedBox}>
                    <HTMLView key={i} value={a} />
                </View>
                );
            }
            if (a.includes('<em>')) {
                return <HTMLView key={i} value={a} />
            }
            
            return <Text key={i} style={styles.p}>{a}</Text>
        }
        // caption
        else if (a.startsWith('<caption>')){
            return <Text key={i} style={styles.caption}>{ a.split('<caption>') }</Text>
        }
        // em
        // else if (a.startsWith('<em>')){
        //     return <Text style={styles.em}>{ a.split('<em>') }</Text>
        // }
        // li
        else if ((a.startsWith('<li'))) {
            if (orderList) {
                counter +=1;
                a = a.replace(/<li.*?>/g, '');;
                return (
                <View  key={i} style={{ flexDirection: "row"}}>
                    <Text style={styles.olBefore}>{counter}</Text>
                    <Text style={styles.olText}>{ a }</Text>
                </View>
                );
            }
            if (a.includes('<em>')) {
                a = '<p>• ' + a + '</p>';
                return <HTMLView key={i} value={ a } />
            }
            return <Text key={i} style={styles.li}>• { a.split('<li>') }</Text>
        }
        //img
        else if (a.startsWith('<img')) {
            a = a.substring(a.indexOf('images/') +7, a.indexOf('.jpg'));
            return <Image key={i} source={images[a]}/>
        }
        return <Text key={i}>{ a }</Text>
    });
    return body;
}

const styles = StyleSheet.create({
    dottedBox: {
        backgroundColor: '#ccc',
    },
    h2: {

    },
    h3: {
        fontWeight: 'bold',
    },
    p: {

    },
    caption: {
        color: '#ccc',
        fontSize: 13,
    },
    image: {
        alignSelf: "center"
    }
})