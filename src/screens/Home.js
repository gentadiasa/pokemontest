import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { useQuery } from 'react-query'
import { Card } from '../assets/components/card';
import HomePagination from '../assets/components/homePagination';
import SearchField from '../assets/components/searchField';
import globalStyles from '../assets/styles/globalStyles';
import { getPokemon } from '../config/api';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [maxPage, setMaxPage] = useState(0)
  const [listPokemon, setListPokemon]= useState([])

  useEffect(() => {
    getListPokemon()
  },[])

  const getListPokemon = async(url, pokemonName) => {
    try {
      setLoading(true)
      let req = await getPokemon({url, pokemonName})
      console.log('req', req)
      if(req){
        if(pokemonName!==undefined){
          navigation.navigate('PokemonDetail', {data: req})
        } else {
          setListPokemon(req)
        }
      } else {
        setListPokemon([])
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={globalStyles.growContainer}>
        <View style={globalStyles.container}>
          <Text style={globalStyles.headingBold}>Welcome to{'\n'}Pokedex!</Text>
          <Text style={globalStyles.subHeading}>Discover all of the pokemon creatures with this app.</Text>
          <SearchField
            onSubmitEditing={(text)=>getListPokemon('', text)}
            onPressClear={()=> getListPokemon()}
          />
          { loading ? <ActivityIndicator />
            : listPokemon.length == 0 ? <Text style={{alignSelf:'center',color:'black'}}>No result</Text>
            : 
            <>
              <HomePagination
                previousPageClicked={() => {
                  if(page!=0) {
                    setPage(page-1)
                    getListPokemon(listPokemon.previous)
                  }
                }}
                nextPageClicked={() => {
                  if(page!=Math.round(listPokemon.count/9)) {
                    setPage(1+page)
                    getListPokemon(listPokemon.next)
                  } 
                }}
                currentPage={page}
                maxPage={Math.round(listPokemon.count/9)}
              />
              {loadPokemon(listPokemon, navigation)}
            </>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const loadPokemon = (data, navigation) => {
  return (
    <View>
      {
        data.results.length == 0 ? <Text style={{color:'black'}}>No item</Text>
        : 
        data.results.map(
          (item, index) => <Card
            key={index} data={item}
            onPress={(e)=> navigation.navigate('PokemonDetail', {data: e})}
          />
        )
      }
    </View>
  );
}

export default Home;