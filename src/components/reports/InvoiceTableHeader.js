import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';


const InvoiceTableHeader = ({ data, Head }) => {

    console.log(data)
  

    const head = Head[1];

   
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            borderBottomColor: '#000000',

            borderBottomWidth: 1,
            alignItems: 'center',
            height: 24,
            textAlign: 'center',
            fontStyle: 'bold',
            flexGrow: 1,
        },
      
        data_of_table: {
            width:  39,
            borderRightColor: 'black',
            borderRightWidth: 1,
            fontSize : 7
        },
       
       
        head : {
            width:  39,
            borderRightColor: 'black',
            borderRightWidth: 1,
            fontSize : 7,
            fontWeight: 'bold',
            textAlign : 'center'

        }
    });



    return (
        <>
            { 
                Object.entries(head)?.map(([k5, ss2]) => (
                    
                    <Text style={styles.head}>{ss2}</Text>
                ))
            }


            {Object.entries(data)?.map(([k, ss]) =>
                <View style={styles.container}>
                    {Object.entries(ss)?.map(([k1, ss1]) => (

                        ss1 === '' ? <Text style={styles.data_of_table}></Text> : <Text style={styles.data_of_table}>{ss1}</Text>

                    ))
                    }

                </View>
            )}

        </>
    )
}

export default InvoiceTableHeader