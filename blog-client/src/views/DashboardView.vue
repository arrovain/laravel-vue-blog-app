<template>
  
  <div>
    <form action="#" method="post" @submit.prevent="create" class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mx-auto space-y-5">
        <div class="col-span-full w-1/3 mx-auto">
            <label for="name" class="block text-sm font-medium text-gray-700">Title:</label>
        <div class="col-span-full w-1/3 mx-auto">
            <input v-model="title" id="name" type="text" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
    </div>

    <div class="col-span-full w-1/3 mx-auto">
        <label for="description" class="block text-sm font-medium text-gray-700">Body:</label>
        <div class="col-span-full w-1/3 mx-auto">
            <textarea v-model="body" id="description" rows="4" class="appearance-none block w-full px-3 py-2 border border-gray-300">

            </textarea>
        </div>
        </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue"
import axios from 'axios'
const title = ref('')
const body = ref('')
const create = () => {
    axios.post('/api/post', {
        title: title.value,
        body: body.value,
    })
}

</script>

<style>

</style>