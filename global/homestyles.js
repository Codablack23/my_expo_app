import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const theme={
    text:"#ffffff",
    background:"#6c63ff"
}

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
          height:"17%",
          padding:"5%",
          paddingTop:"7%",
          paddingHorizontal:"10%",
          borderTopRightRadius:70,
          alignItems:"center",
          borderTopLeftRadius:70,
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
          padding:"4%",
          width:"100%",
          borderRadius:10,
          backgroundColor:"#EEEEEE",
          color:"#9E9E9E",
          alignItems:"center"
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
    }
})

export {
    homeStyles,
    modalStyles,
    theme
}