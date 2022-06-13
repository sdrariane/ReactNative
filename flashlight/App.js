import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle)

  useEffect(() => {Torch.switchState(toggle);}, [toggle]);

  useState(() => {const subscription = RNShake.addListener(() => {setToggle(oldToggle => !oldToggle);});
    return () => subscription.remove();}, []);

  return (
  <View style={toggle ? style.containerLight : style.container}>
    <TouchableOpacity onPress={() => {setToggle(handleChangeToggle);}}>
          <Image style={toggle ? style.lightingOff : style.lightingOn} source = {toggle ? require('') : require('')}/>
    </TouchableOpacity>
  </View>
  );
};

export default App;

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    align:'center',
    justifyContent: 'center',
  },
  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  }
});