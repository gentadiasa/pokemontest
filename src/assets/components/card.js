import React, { useState, useEffect } from 'react'
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { deviceWidth, responsiveWidth } from '../styles/constants'
import globalStyles from '../styles/globalStyles';
import { baseViewCardPlaceHolder, CardPlacehoder } from './cardPLaceholder';

export const Card = (props, {navigation}) => {
    const [loading, setLoading] = useState(true)
    const [details, setDetails] = useState([])

    let params = props.data

    useEffect(() => {
        getDetail()
    },[])

    const getDetail = async() => {
        try {
            let req = await fetch(params.url)
            let resp = await req.json()
            setDetails(resp)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    if(loading) return <CardPlacehoder />

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={()=>props.onPress(details)}
            activeOpacity={0.5}
        >
            <View style={{padding: 15, paddingRight: 0, width: deviceWidth / 1.7}}>
                
                <Text style={{color:'black'}}>#{details.id}</Text>
                <Text style={globalStyles.title}>{details.name}</Text>

                <FlatList
                    scrollEnabled={false}
                    data={details.types}
                    renderItem={({item}) => (
                        <View style={styles.tag}>
                            <Text style={{textAlign: 'center',color:'black'}}>{item.type.name}</Text>
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                />
                
            </View>

            <View
                style={styles.container}>
                <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: `${details.sprites.front_default}` }}
                />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  imageContainer: {
    marginTop: 5,
    marginLeft: -10,
    alignItems: 'center'
  },
  container: {
    width: 100,
    height: 100,
    paddingRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
