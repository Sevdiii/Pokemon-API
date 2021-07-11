 let currentPokemon;


 async function loadPokemon() {

     let url = 'https://pokeapi.co/api/v2/pokemon/charizard';
     let response = await fetch(url);
     currentPokemon = await response.json();

     showPokemonInfo(currentPokemon);
     console.log('response', currentPokemon);
 }


 function showPokemonInfo(currentPokemon) {
     document.getElementById('nameofpokemon').innerHTML = currentPokemon['name'];
     document.getElementById('poimage').src = currentPokemon['sprites']['back_default'];

     document.getElementById('nameofstat1').innerHTML = currentPokemon['stats'][0]['stat']['name'];
     document.getElementById('numberofstat1').innerHTML = currentPokemon['stats'][0]['base_stat'];


     document.getElementById('nameofstat2').innerHTML = currentPokemon['stats'][1]['stat']['name'];
     document.getElementById('numberofstat2').innerHTML = currentPokemon['stats'][1]['base_stat'];


     document.getElementById('nameofstat3').innerHTML = currentPokemon['stats'][2]['stat']['name'];
     document.getElementById('numberofstat3').innerHTML = currentPokemon['stats'][2]['base_stat'];

     document.getElementById('nameofstat4').innerHTML = currentPokemon['stats'][3]['stat']['name'];
     document.getElementById('numberofstat4').innerHTML = currentPokemon['stats'][3]['base_stat'];

     document.getElementById('nameofstat5').innerHTML = currentPokemon['stats'][4]['stat']['name'];
     document.getElementById('numberofstat5').innerHTML = currentPokemon['stats'][4]['base_stat'];

     document.getElementById('nameofstat6').innerHTML = currentPokemon['stats'][5]['stat']['name'];
     document.getElementById('numberofstat6').innerHTML = currentPokemon['stats'][5]['base_stat'];


     document.getElementById('power').innerHTML = currentPokemon['abilities'][0]['ability']['name'];
     document.getElementById('power1').innerHTML = currentPokemon['abilities'][1]['ability']['name'];


 }