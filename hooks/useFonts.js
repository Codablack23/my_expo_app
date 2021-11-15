import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'lato': require('./assets/fonts/Lato.ttf'),
    'dosis':require('./assets/fonts/Dosis-Light.ttf')
  });
