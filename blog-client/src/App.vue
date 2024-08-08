<script setup>
import axios from 'axios';


 axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {

 });

 axios.post('http://127.0.0.1:8000/login', {
  email:'arrovain@gmail.com',
  password: 'password'
 })
</script>

<template>
  
</template>

<style scoped>

</style>
