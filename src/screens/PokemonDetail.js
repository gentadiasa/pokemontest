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
import globalStyles from '../assets/styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons'
import { deviceHeight, deviceWidth, responsiveHeight, responsiveWidth } from '../assets/styles/constants';
import ContainerDetail from '../assets/components/containerDetail';

const PokemonDetail = ({route, navigation}) => {
    const { data } = route.params;

    useEffect(() => {
        // console.warn('dddd', data)
    },[])

    return (
        <SafeAreaView>
        <StatusBar />
        <ScrollView style={globalStyles.growContainer}>
            <ContainerDetail
                onBackPressed={()=>navigation.goBack()}
            >
                <Image
                    style={globalStyles.imageDetails}
                    source={{ uri: `${data.sprites.front_default}` }}
                    resizeMode='stretch'
                />
                <Text style={globalStyles.headingDetail}>{data.name}</Text>
                <Text style={globalStyles.subHeading}>#{data.id}</Text>
                
                <View style={{flexDirection:'row',marginBottom:10}}>
                    {data.types.map((item) => renderTag(item.type.name))}
                </View>

                <>
                    {renderAttribute('Stats', data.stats)}
                    {renderMoves('Moves', data.moves)}
                </>

            </ContainerDetail>
        </ScrollView>
        </SafeAreaView>
    );
};

const renderAttribute = (title, data) => {
    return(
        <View style={globalStyles.properties}>
            <Text style={globalStyles.propsTitle}>{title}</Text>
            <View style={{alignItems:'flex-start'}}>
                {data.map((item, index) => rendeItem(index, item.stat.name, item.base_stat))}
            </View>
        </View>
    )
}

const renderMoves = (title, data) => {
    return(
        <View style={[globalStyles.properties]}>
            <Text style={globalStyles.propsTitle}>{title}</Text>
            <View style={{flexDirection:'row',width:responsiveWidth(70),flexWrap:'wrap',justifyContent:'center'}}>
                {data.map((item, index) => renderTag(item.move.name))}
            </View>
        </View>
    )
}

const rendeItem = (index, title, desc) => {
    return(
        <View key={index} style={{flexDirection:'row',justifyContent:'space-between',width:responsiveHeight(35)}}>
            <Text>{title}</Text>
            <Text>{desc}</Text>
        </View>
    )
}

const renderTag = (name) => {
    return(
        <View style={[globalStyles.tag]}>
            <Text >{name}</Text>
        </View>
    )
}

export default PokemonDetail;