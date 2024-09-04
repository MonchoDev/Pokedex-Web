<template>
    <div class="about">
    
    <PokemonInfo :pokemon="selectedPokemon"/>
      <h1>Search</h1>
      
      <input type="text" v-model="query"/>
      <button v-on:click="filterPokemon">Search</button>

      <ul>
        <li v-for="pokemon in filtered.values" :key="pokemon.name" v-on:click="selectPokemon(pokemon.url)">
            {{ pokemon.name }}
            
        </li>
      </ul>
    </div>
  </template>
  
<script setup>
    import {ref, reactive, computed, onMounted} from 'vue'
    import axios from 'axios'

    import PokemonInfo from '@/components/PokemonInfo.vue';

    var pokemons = []
    var filtered = reactive([])
    var query = ""
    var selectedPokemon = ref("")

    onMounted(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => {
            pokemons = response.data.results

            console.log(filtered.values)
        })
    })

    function filterPokemon(){
        filtered.values = pokemons.filter(x => x.name.includes(query))
        console.log(filterPokemon.values)
    }

    function selectPokemon(url){
        console.log(url)
        axios.get(url).then(response => {
            console.log(response)
            selectedPokemon.value = response.data
        })
    }
</script>

  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>