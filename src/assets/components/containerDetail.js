import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import globalStyles from '../styles/globalStyles';
import { deviceHeight, deviceWidth, responsiveHeight } from '../styles/constants';

const ContainerDetail = (props) => {
  return(
    <ScrollView >
      <ImageBackground style={[{backgroundColor: 'cyan',width:deviceWidth}]}>
      <TouchableOpacity onPress={()=>props.onBackPressed()} style={{position:'absolute',top:responsiveHeight(4),left:responsiveHeight(4)}}>
        <Icon name='arrow-back' color='white' size={responsiveHeight(6)}/>
      </TouchableOpacity>
      <View style={{marginTop: responsiveHeight(37)}}/>
      <View style={[globalStyles.container, {backgroundColor: 'white',width:deviceWidth,alignItems:'center',borderRadius:50}]}>
        {props.children}
      </View>
      </ImageBackground>
    </ScrollView>
  );
}

export default ContainerDetail