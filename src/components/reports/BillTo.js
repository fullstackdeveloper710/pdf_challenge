import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36
    },
    billTo: {
        marginTop: 65,
        paddingBottom: 20,
       
    },
    heading : {
        fontWeight : 'bold',
        paddingBottom: 20,
    },
    
    to : {
        paddingBottom: 20,
    },
    date: {
        marginLeft: 370
    },
    subject: {
        marginTop: 50
    }, dear : {
        marginTop: 30
    }, main : {
        marginTop: 20
    }, best : {

        marginTop : 20

    }, name : {
        marginTop : 20
    }

  });


  const BillTo = ({flag}) => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Tom Schlepp - Schäringerstraße 3 - 80634 München</Text>

        

     
        <Text style={styles.heading}>Disciples München-Haar</Text>
        <Text>Sarah Enstone</Text>
        <Text>Keferloherstraße 24</Text>
        <Text style={styles.to}>85540 Haar</Text>


        <Text style={styles.date}>{flag === 'ID' ? 'DATE: 12.04.2022' : flag === 'DOM' ? 'DATE: 08.11.1988' : 'DATE: 05.08.2016'} </Text>

        <Text style={styles.subject}>Subject: Staff availibility at [CALENDARWEEK]/[YEAR]</Text>

        <Text style={styles.dear}>Dear Disciples München-Haar,</Text>

        <Text style={styles.main}>Hearby I inform you about the availibity of our staff by location and nationality for the current week.</Text>

        <Text>If you are interested in getting in touch with us, feel free to contact us.</Text>

        <Text>[ADDRESSOR COMPANY NAME] is looking forward to support your event.</Text>

        <Text style={styles.best}>With best regards,</Text>

        <Text style={styles.name}>Tom Schlepp</Text>
    </View>
  );
  
  export default BillTo;

