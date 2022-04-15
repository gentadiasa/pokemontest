
import React, {useState} from 'react'
import { View, TextInput,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/Entypo'

export default SearchField = (props) => {
    const [searchText, setText] = useState('')

    return (
        <View
            style={{
                borderWidth:1,
                borderRadius: 25,
                marginVertical: 25,
                flexDirection:'row',
            }}
        >
            <Icon name='search' color='black' size={25} style={{alignSelf:'center',marginLeft:15}}/>
            <TextInput
                style={{
                    flex:1,
                    borderRadius: 25,
                }}
                placeholder='What pokemon are you looking for?'
                onChangeText={(text) => setText(text)}
                onSubmitEditing={() => props.onSubmitEditing(searchText)}
                value={searchText}
            />
            {
                searchText == '' ? null :
                <TouchableOpacity style={{alignSelf:'center',marginRight:15}}
                    onPress={()=>{
                        setText('')
                        props.onPressClear()
                    }}
                >
                    <Icons name='circle-with-cross' color='black' size={25}/>
                </TouchableOpacity>
            }
        </View>
    )
}