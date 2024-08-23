import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Test2 =() =>{
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.Text}>Top Left</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomLeft}>
                    <Text style={styles.Text}>Bottom Left</Text>
                </View>
                <View style={styles.bottomRight}>
                    <View style={styles.bottomRightTop}>
                        <Text style={styles.Text}>Right Top</Text>
                    </View>
                    <View style={styles.bottomRightBottom}>
                        <Text style={styles.Text}>Right Bottom</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    top:{
        flex:1,
        backgroundColor:'#f4fe87',
        justifyContent:'center',
        alignItems:'center',
    },
    Text:{
        fontWeight:'bold',
        fontSize:24,
        color:'#21a3d0',
    },
    bottom:{
        flex:1,
        flexDirection:'row'
    },
    bottomLeft:{
        flex:1,
        backgroundColor:'#3eee85',
        justifyContent:'center',
        alignItems:'center',
    },
    bottomRight:{
        flex:1,
        backgroundColor:'red',
    },
    bottomRightTop:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ee3ee7',
    },
    bottomRightBottom:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
    },
})
export default Test2;
