<template>
    <div class="text-2xl">
Update
    </div>
</template>


<script setup>

const post = ref({})
const route = useRoute()
const errors = ref({})
const title = ref('')
const body = ref('')
const fetchPost =  () => {
axios.get(route.params.slug).then(res => {
    
    console.log(res);
    post.value = res.data.post
    title.value = res.data.post.title
    body.value = res.data.post.body

})
}

const update = () => {
    axios.put(route.params.id, {
        title: title.value,
        body: body.value
    }).then(res =>{
        if (err.status == 200) {
            errors.value = {}
        }
    }).catch(err => {

    if (res.status == 422) {

            errors.value = err.response.data.errors;

        }
})
}

mounted: {
    fetchPost();
}  

</script>