import { StyleSheet } from 'react-native'
import { deviceHeight, normalize, responsiveHeight, responsiveWidth } from './constants'

export const fontStyles = StyleSheet.create({
  h0: {
    fontSize: normalize(18),
    color: 'black',
  },
  h1: {
    fontSize: normalize(13),
    color: 'black',
    paddingVertical: 10,
  },
  h2: {
    fontSize: normalize(9),
    color: 'black',
  },
});

export default StyleSheet.create({
  growContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    minHeight: deviceHeight,
    padding: 24
  },
  heading: {
    ...fontStyles.h1,
  },
  headingBold: {
    ...fontStyles.h1,
    fontWeight: 'bold'
  },
  subHeading: {
    ...fontStyles.h2,
  },
  title: {
    fontSize: normalize(11),
    fontWeight: 'bold'
  },
  headingDetail: {
    ...fontStyles.h0,
    alignSelf:'center',
    marginTop: responsiveHeight(2)
  },
  imageDetails:{
    width: responsiveHeight(35),
    height: responsiveHeight(35),
    alignSelf:'center',
    // backgroundColor: 'red',
    marginTop:responsiveHeight(-20),
    // top:responsiveHeight(12),
    position:'absolute',
  },
  tag: {
    backgroundColor: 'lightgray',
    minWidth: responsiveWidth(15),
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    margin: 5
  },
  properties: {
    backgroundColor: "rgba(0,0,0,0.1)",
    padding:20,
    borderRadius:20,
    paddingTop: 10,
    paddingBottom:20,
    marginTop: 10    
  },
  propsTitle:{
    ...fontStyles.h2,
    textAlign:'center',
    paddingBottom:5,
  }
})
