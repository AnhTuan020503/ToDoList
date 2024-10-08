import { StyleSheet } from "react-native";
import color from "../../contains/color";
const styles=StyleSheet.create({
    item:{
        flexDirection:'row',
        backgroundColor:color.white,
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
        alignItems:'center',
        justifyContent:'center',
    },
    even:{
        backgroundColor:color.green,
    },
    odd:{
        backgroundColor:color.second,
    },
    number:{
        color:color.white,
        fontSize:16,
        fontWeight:'700',
    },
    content:{
        width:'80%',
        fontSize:16,
    },
})
export default styles;