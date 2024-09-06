<template>
  
  <div>
    <form action="#" method="post" @submit.prevent="create" class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mx-auto space-y-5">
        <div class="col-span-full w-1/3 mx-auto">
            <label for="name" class="block text-sm font-medium text-gray-700">Title:</label>
        <div class="col-span-full w-1/3 mx-auto">
            <input v-model="title" id="name" type="text" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <p class="text-red-500" v-if="errors?.title">
            {{ errors.title[0] }}
        </p>
    </div>

    <div class="col-span-full w-1/3 mx-auto">
        <label for="description" class="block text-sm font-medium text-gray-700">Body:</label>
        <div class="col-span-full w-1/3 mx-auto">
            <textarea v-model="body" id="description" rows="4" class="appearance-none block w-full px-3 py-2 border border-gray-300">

            </textarea>
        </div>
        <p class="text-red-500" v-if="errors?.body">
            {{ errors.body[0] }}
        </p>
        </div>
    </form>

    <div class="flex justify-evenly my-4">
        <h2 class="text-xl font-bold">Post</h2>
        <h2 class="text-xl font-bold">Actions</h2>

    </div>

    <div class="flex justify-evenly text-center space-y-3" v-for="post in posts" :key="post.id">
        <p class="text-lg font-bold">{{ post.title}}</p>
        <div class="space-x-7 mr-10">
            <RouterLink to="/" class="text-blue-500 hover:text-blue-600">Edit</RouterLink>
            <button  class="text-red-500 hover:text-red-600">Delete</button>
        </div>
    </div>

    <div class="flex justify-center space-x-3 mb-10">
        <button :disabled="!pagination.prev_page_url" @click="fetchPosts(pagination.prev_page_url)">Previous</button>
        <button :disabled="!pagination.next_page_url" @click="fetchPosts(pagination.next_page_url)">Next</button>
    </div>
    
    {{ errors }}
  </div>
</template>

<script setup>
import { ref } from "vue"
import { RouterLink } from 'vue-router'
import axios from 'axios'
const pagination = ref({})
const title = ref('')
const body = ref('')
const errors = ref({})
const create = () => {
    axios.post('/api/post', {
        title: title.value,
        body: body.value,
    }).then(response => {
        if (res.status == 200) {
            title.value = ''
            body.value = ''
        }
}).catch(error => {
    if (error.response.status == 422) {
        errors.value = err.response.data.errors
    }
})
}


const fetchPosts = (url = 'api/post') => {
    axios.get(url).then(res => {
        console.log(res);
        posts.value = res.data.posts.data
        pagination.value = {
           next_page_url: res.data.posts.next_page_url,
           prev_page_url: res.data.posts.prev_page_url,
        
        
        }

    })
}

mounted: {
    fetchPosts()
}
</script>

<style>

</style>