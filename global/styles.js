import { StyleSheet } from "react-native";
const themeColor={
    text:"#ffffff",
    background:"#6c63ff"
}

const getStarted=StyleSheet.create({
    container:{
        flex:1,
        minWidth:"100%",
        padding:'3%',
        paddingTop:"15%",
        alignItems:'center',
        justifyContent:'space-between'
     
    },
    textContainer:{
        alignItems:'center',
        width:"50%",
        paddingLeft:"2%"
    },
    text:{
       fontSize:25,
       fontWeight:"bold",
       color:"#050505",
    //    fontFamily:"lato"
    },

    imageContainer:{
        maxWidth:"100%"
    },
    inputContainer:{
       flexDirection:"row",
       width:"100%",
       backgroundColor:themeColor.background,
       borderRadius:30,
       minHeight:30,
       padding:"1%",
       paddingRight:"1%"
    },
    inputText:{
        flex:2,
        padding:"4%",
        alignItems:"center"
    },
    go:{
        width:"30%",
        padding:"3%",
        backgroundColor:"#ffffff",
        borderRadius:50,
        alignItems:"center",
        fontSize:24,
        margin:"1%"
    },
    nextButton:{
        width:"80%",
        padding:15,
        borderRadius:10,
        backgroundColor:"#2f2e41",
        color:"#ffffff",
        alignItems:'center',
    },
    loginLink:{
      alignItems:"center",
      marginTop:"4%",
      marginBottom:"4%"
    }
   
})
const addphone=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:"12%",
        paddingHorizontal:"7%"
    },
    headerText:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10

    },
    infoText:{
        fontSize:15,
        color:"#9E9E9E"
    },
    formContainer:{
        flex:1,
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:"3%",
        paddingBottom:"3%"
    },
    input:{
        flexDirection:"row",
        width:"100%",
        borderRadius:10,
        minHeight:20,
        paddingVertical:"3%",
        paddingHorizontal:"5%",
        paddingTop:"5%",
        borderColor:themeColor.background,
        backgroundColor:"#E0E0E0"
    },
    countrySelect:{
        flexDirection:"row",
        width:"30%",
        fontSize:20

    },
    phoneDetails:{
        flex:2,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width:"70%"
       
    },
    countryCode:{
        height:20,
        fontSize:18,
        width:"30%",
        alignItems:"center"
        
    },
    number:{
        height:20,
        fontSize:20,
        width:"60%"
    },
    continueBtn:{
        backgroundColor:themeColor.background,
        width:"100%",
        borderRadius:80,
        padding:"6%",
        alignItems:"center",
        color:themeColor.text

    },
    btnContainer:{
        width:"100%",
    }
})

export {
    getStarted,
    addphone
}