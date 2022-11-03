import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'


const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#000000',
    },
});

  const InvoiceItemsTable = ({ Head, data}) => (
  
    <View style={styles.tableContainer}>
        <InvoiceTableHeader Head={Head} data={data} />
       
    </View>
  );
  
  export default InvoiceItemsTable