import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';


const Checkbox = () => {

    return (
        <View>
            <Text>Checkbox</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fefefe'
    }, 
    title : {
        color: '#333', 
        size: 16, 
        fontWeight: '700', 
        textTransform: 'uppercase', 
        marginVertical: 10, 
        marginLeft: 12
    }
});

export default Checkbox;