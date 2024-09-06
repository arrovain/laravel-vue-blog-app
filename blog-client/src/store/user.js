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

            await axios.get('/sanctum/csrf-cookie').then(res => {

            });
            await axios.post('/login', data)
            await axios.get('api/user').then((res => {
                if(res.status == 200) {
                    
                this.user = res.data
                router.push({name: 'dashboard'})
                }

               
            }))
            },
            },
            });