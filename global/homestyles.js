import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const theme={
    text:"#ffffff",
    background:"#6c63ff"
}

const newStyle=(styleObject)=>StyleSheet.create(styleObject)


const homeStyles =StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',

      },
      map: {
        ...StyleSheet.absoluteFillObject,
        height:"100%",
        marginBottom:"10%"
      },
      orderContainer:{
          position:"absolute",
          bottom:0,
          left:0,
          width:"100%",
          height:"20%",
          padding:"5%",
          paddingTop:"7%",
          paddingHorizontal:"10%",
          alignItems:"center",
          shadowColor: '#171717',
          elevation:2,
          shadowOffset: {width: 1, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 2,
          backgroundColor: '#fff',
      },
      orderButtonContainer:{
           width:"80%",
           alignItems:"center"
      },
      orderButton:{
          marginTop:"3%",
          padding:"4%",
          width:"100%",
          borderRadius:10,
          backgroundColor:"#eee",
          color:"#9E9E9E",
          alignItems:"center",
          
      },
      drawerMenu:{
          position:"absolute",
          top:0,
          left:0,
          zIndex:100,
          marginTop:"10%",
          marginHorizontal:"4%",
          alignItems:"center"
      },
      menuIcon:{
          backgroundColor:"#ffffff",
          padding:"3%",
          borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
          shadowColor: '#171717',
          elevation:2,
          shadowOffset: {width: 1, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 2,
      }
      
})

const modalStyles=StyleSheet.create({
    modalContent:{
        flex:1,
        padding:"3%"
    },
    modalHeader:{
        flexDirection:"row",
        paddingHorizontal:"4%",
    },
    modalTitleText:{
        fontSize:16,
        fontWeight:"bold"
    },
    modalForm:{
        alignItems:"center",
        width:"100%",
        marginHorizontal:"5%"
    },

    input:{
        flexDirection:"row",
        width:"100%",
        margin:"1.5%",
        alignItems:"center"
    },
    inputField:{
       width:"75%",
       padding:"2%",
       marginLeft:"4%",
       backgroundColor:"#eee",
       borderRadius:10
    },
    searchResults:{
        flex:1,
        padding:"2%",
        borderTopColor:"#eee",
        borderTopWidth:1,
        margin:"2%"

    },
    location:{
        borderBottomColor:"#eee",
        borderBottomWidth:1,
        paddingVertical:"4%",
        paddingHorizontal:"5%"
    },
    locationName:{
        fontSize:18,
        color:"#9e9e9e"
    },
    sizes:{
        padding:'5%',
        alignItems:"center"
    },
    weightInput:{
        padding:"3%",
        borderRadius:10,
        backgroundColor:"#eee",
        width:"100%",
        marginRight:"2%",
        marginBottom:"4%"
    },
    quantityContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        padding:"1%",
        alignItems:"center"
    },
    quantity:{
        padding:"5%",
        width:"56%",
        marginHorizontal:"2%",
        borderRadius:5,
        backgroundColor:"#fafafa",
        alignItems:"center"

    },
    increase:{
        height:"100%",
        padding:"1%",
        width:"20%",
        paddingTop:"7%",
        borderRadius:5,
        marginRight:"2%",
        backgroundColor:"#eee",
        alignItems:"center"

    },
    reduce:{
        height:"100%",
        padding:"3%",
        width:"20%",
        paddingTop:"7%",
        borderRadius:5,
        backgroundColor:"#eee",
        alignItems:"center"

    },
    quantityText:{
        marginTop:"15%"
    },
    category:{
      flexDirection:"row",
      justifyContent:"space-between",
      borderBottomWidth:1,
      borderBottomColor:"#eee"
    },
    categoryText:{
     marginTop:"5%"
    },
    selectCategory:{
        borderRadius:10,
        margin:"4%",
        padding:"4%",
        paddingHorizontal:"7%",
        backgroundColor:"#fafafa"
    }

})
const drawerStyles=StyleSheet.create({
  container:{
      flex:1,
      paddingTop:"10%",
      paddingBottom:"2%",
      paddingHorizontal:"5%"
      
  },
  header:{
      padding:"4%",
      width:"100%",
      borderRadius:10
  },
  navLinks:{
  margin:"4%",
  padding:"4%"
  },
  linkContainer:{
     flexDirection:"row",
  },
  navigation:{
      flex:1,
      marginVertical:"5%",
      marginBottom:"15%",
      borderColor:"#eee",
      borderRadius:18,
      paddingTop:"10%",
      borderBottomWidth:1,
      backgroundColor:theme.background,
      borderTopWidth:1
  },
  logout:{
      padding:"7%",
      width:"100%",
      borderRadius:10,
      marginBottom:"5%",
      backgroundColor:theme.background,
  }
})

const paymentStyles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:"10%",
        paddingHorizontal:"7%"
        
    },
    content:{
        flex:1,
        borderTopWidth:1,
        paddingVertical:"5%",
        borderColor:"#e0e0e0"
     
    },
    methodContainer:{
        padding:"5%"
    },
    method:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderBottomColor:"#e0e0e0"
      },
      methodText:{
        marginTop:"5%",
        textTransform:"capitalize"
       },
})
const deliveryStyles = newStyle({
    container:{
        flex:1,
        paddingTop:"10%",
        paddingHorizontal:"7%"
        
    },
    content:{
        flex:1,
        borderTopWidth:1,
        paddingVertical:"5%",
        borderColor:"#e0e0e0"
     
    },
    logs:{
        padding:"2%",
        paddingVertical:"4%"
    },
    logDetails:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:"3%",
    },
    logName:{
        textTransform:"capitalize",
        color:"#757575",
        fontSize:17,
        fontWeight:"bold"
    },
    log:{
        backgroundColor:"#fafafa",
        borderColor:theme.background,
        borderLeftWidth:5,
        padding:"3%",
        paddingVertical:"5%"
    },
      logText:{
      color:"#bdbdbd"
    },
})
const supportStyles=newStyle({
    container:{
        flex:1,
        paddingTop:"10%",
        paddingHorizontal:"7%",
        paddingBottom:"10%"
        
    },
    textArea:{
        flex:1,
        width:"100%"

    },
    floatingActionBtn:{
        position:"absolute",
        bottom:0,
        right:10,
        zIndex:10
    },
    FAB:{
        margin:"4%",
        padding:"7%",       
        borderRadius:20,
        shadowColor: '#171717',
        elevation:2,
        shadowOffset: {width: 1, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        alignItems:"center"
    }

})
export {
    homeStyles,
    modalStyles,
    theme,
    drawerStyles,
    paymentStyles,
    deliveryStyles,
    supportStyles

}