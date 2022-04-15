import {
    Dimensions,
} from 'react-native'
  
export const deviceHeight = Dimensions.get('window').height
export const deviceWidth = Dimensions.get('window').width
export const deviceHeightScreen = Dimensions.get('screen').height
export const deviceWidthScreen = Dimensions.get('screen').width

export const responsiveHeight = (h) => {
    return deviceHeight * (h/100)
}

export const responsiveWidth = (w) => {
    return deviceWidth * (w/100)
}

export const normalize = (size) => {
    const scale = deviceHeight/deviceWidth
    const normalizedSize = size * scale
    return Math.ceil(normalizedSize)
}