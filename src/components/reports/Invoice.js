import React from 'react';
import { Page, Document, Image, StyleSheet , } from '@react-pdf/renderer';
import BillTo from './BillTo'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceTableFooter from './InvoiceTableFooter'
import logo from '../../../src/logo.png'


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        width: 400,
        height: 66,
        position: 'absolute',
        left:100,
        top:0,
       
    }
    ,
    footer : {
        width: '100%',
        height:0,
        borderWidth:2,
        margin:10
    }
  });
  
  const Invoice = ({data, flag, Head}) => (
            <Document>
                <Page size="A4" style={styles.page}>
                    <Image style={styles.logo} src={logo} />
                    <BillTo flag={flag} /> 
                    <InvoiceItemsTable  data={data} Head={Head} />
                  
                    <InvoiceTableFooter />
                   
                </Page>
            </Document>
        );
  
  export default Invoice