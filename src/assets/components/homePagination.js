import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot'
import Icon from 'react-native-vector-icons/Ionicons'
import { responsiveWidth } from '../styles/constants';

export default HomePagination = (props) => {
    return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      alignSelf:'flex-end',
      width: responsiveWidth(40)
    }}>

      <TouchableOpacity
        onPress={props.previousPageClicked}
      >
        <Icon name='chevron-back-circle-outline' color='black' size={20}/>
      </TouchableOpacity>

      <PaginationDot
        activeDotColor={'black'}
        curPage={props.currentPage}
        maxPage={props.maxPage}
      />

      <TouchableOpacity
        onPress={props.nextPageClicked}
      >
        <Icon name='chevron-forward-circle-outline' color='black' size={20}/>
      </TouchableOpacity>
    </View>
  )
}