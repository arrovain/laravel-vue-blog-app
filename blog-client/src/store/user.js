import { defineStore } from "pinia";



export const useCounterStore = defineStore("user", {
    state: () => ({
       user: null,

    }),
   
    getters: {
        getUser: (state) => state.user,
    
    },
    actions: {
        login(){

        }},

});