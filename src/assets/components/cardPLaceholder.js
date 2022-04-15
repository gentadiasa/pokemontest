import React from 'react'
import {
    View
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const baseViewCardPlaceHolder = () => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', marginHorizontal: 10, paddingBottom: 25}}>
            <View>
            <View style={{ width: 80, height: 20, borderRadius: 4 }}/>
            <View style={{ marginTop: 6, width: 120, height: 20, borderRadius: 4 }} />
            <View style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}/>
            </View>
            <View style={{ width: 60, height: 60, borderRadius: 5}} />
        </View>
    );
}

export const CardPlacehoder = () => {
    return (
        <SkeletonPlaceholder>
            {baseViewCardPlaceHolder()}
        </SkeletonPlaceholder>
    )
}