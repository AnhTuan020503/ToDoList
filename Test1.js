

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Test1 =()=>{
  return(
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.toptext}>Top Left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
         <Text style={styles.centertext}>Center</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Bottom Right</Text>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e7feff',
  },
  top:{
    marginTop:80,
    marginHorizontal:40,
    backgroundColor:'#ffffff',
    paddingVertical:15,
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'red',
  },
  toptext:{
    fontSize:20,
    color:'#21a3d0',
    fontWeight:'bold'
  },
  containerTop:{
    flex:1,
  },
  containerCenter:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  center:{
    width:150,
    height:150,
    backgroundColor:'#33ff60',
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
  },
  centertext:{
    fontSize:20,
    color:'#21a3d0',
    fontWeight:'bold',
    
  },
  containerBottom:{
    flex:1,
  },
  bottom:{
    marginTop:80,
    marginHorizontal:40,
    backgroundColor:'#7ee6fd',
    paddingVertical:15,
    paddingHorizontal:20,
    borderRadius:15,
  },
  bottomText:{
    textAlign:'right',
    fontSize:20,
    color:'#fff',
    fontWeight:'bold'
  },

});

export default Test1;
