import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    item:{
        flexDirection:'row',
        backgroundColor:'#fff',
        marginBottom:20,
        paddingVertical:12,
        paddingHorizontal:20,
        borderRadius:8,
        justifyContent:'space-between',
        alignItems:'center',
    },
    square:{
        width:48,
        height:36,
        borderRadius:10,
        backgroundColor:'#53d6f2',
        alignItems:'center',
        justifyContent:'center',
    },
    number:{
        color:'#fff',
        fontSize:16,
        fontWeight:'700',
    },
    content:{
        width:'80%',
        fontSize:16,
    },
})
export default styles;