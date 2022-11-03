import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';

import foot1 from '../../assets/foot_1.jpg';

import foot2 from '../../assets/foot_2.jpg';


import foot3 from '../../assets/foot_3.jpg';

const borderColor = '#FF0000'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent:'space-between',
        
        borderBottomWidth: 2,
        alignItems: 'center',
        height: 24,
        fontSize: 12,
        fontStyle: 'bold',
    },
    description: {
        width: '85%',
        textAlign: 'right',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingRight: 8,
    },
    total: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
    logo: {
        width: 80,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 150
    },
    txt : {
        color : '#083b66'
    }
});


const InvoiceTableFooter = () => {

    return (
        <View style={styles.row}>
        <View>
            <Image style={styles.logo} src={foot1} />
            <Text style={styles.txt}>Schäringerstraße 3,
                80634 München</Text>
                </View>
                <View>
            <Image style={styles.logo} src={foot2} />
            <Text style={styles.txt}>
                089 127 38 676
            </Text>
            </View>
            <View>
            <Image style={styles.logo} src={foot3} />

            <Text style={styles.txt}>info@arrimo-digital.de</Text>
            </View>

        </View>
    )
};

export default InvoiceTableFooter