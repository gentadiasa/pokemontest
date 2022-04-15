
export const getPokemon = ({url, pokemonName}) => {
    let page = ''
    if (pokemonName != undefined && url != undefined){
        page = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    } else {
        page = url == undefined ? 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9' : url
    }
    console.warn(page)
    return fetch(page).then((res) => {
        console.log(res)
        if(res.status == 200){
            const result = res.json()
            return result;
        }
        return;
    }).catch((e)=>{
        console.log('ee')
        return;
    });
}

export const getDetailPokemon = (url) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/1/`).then((res) => {
        const result = res.json();
        return result;
    });
}