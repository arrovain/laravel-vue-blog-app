<template>
    

    <div class="flex- min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <input v-model="email" for="email" class="block text-sm font-medium leading-6 text-gray-600"> Email adress</input>
                        <div class="mt-2">
                            <input id="email" type="email" name="email" autocomplete="email" required="" class="block-w-full rounded-md placeholder:text-gray-400 focust:ring-2 focus:ring-inset sm:text:sm sm:leading-6">

                        </div>
                        </div>
             
                        <div>
                            <input v-model="password" for="password" class="block text-sm font-medium leading-6 text-gray-600">Password</input>
                        </div>
                    
                        <div>
                            <input id="password" type="password" name="password" autocomplete="current-password" required="" class="block-w-full rounded-md placeholder:text-gray-400 focust:ring-2 focus:ring-inset sm:text:sm sm:leading-6">
                        </div>
                    </form>
                </div>
                <div>
                    <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Sign in
                    </button>
                </div>
       
        </div>
</template>

<script setup>
import {userState } from '../store/user';
import { ref } from 'vue';
const email = ref('');
const password = ref('');
const store = userState();
const errors = ref({});

const login = () => {
    store.login({email: email.value, password:  password.value}).catch(err => {
        console.log(err);
    if (err.response.status == 422) {

        errors.value = err.response.data.errors;

    }
    
});
}

</script>