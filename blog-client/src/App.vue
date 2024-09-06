<script setup>
import axios from 'axios';

const login = async () => {

 
 await axios.get('http://localhost:8000/api/user').then(response => {
    console.log(response);
 });
 
 }
</script>

<template>
  
</template>

<style scoped>

</style>
