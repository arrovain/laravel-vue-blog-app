<script setup>
import axios from 'axios';

const login = async () => {
await axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {

 });

 await axios.post('http://localhost/login', {
  email:'arrovain@gmail.com',
  password: 'password'
 }) }
</script>

<template>
  
</template>

<style scoped>

</style>
