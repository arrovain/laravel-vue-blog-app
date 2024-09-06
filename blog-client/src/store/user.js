import { defineStore } from "pinia";



export const userState = defineStore("user", {
    state: () => ({
       user: null,

    }),
   
    getters: {
        getUser: (state) => state.user,
    
    },
    actions: {
       async login(data){

            await axios.get('/sanctum/csrf-cookie').then(response => {

            });
           
            await axios.post('/login', data)

        },

    },

});