<template>
    <div>
        <div v-show="showItem">
            <ItemModal 
                @close-modal="showItem = false"
                :info='{
                    id: data.id,
                    description: data.description,
                    owner: data.owner
                }'
            />
        </div>
        <div>
            <div class="max-w-xs border border-gray-300 m-auto my-1 shadow-xl rounded-lg">
                <div class="p-8 mx-2 bg-white">
                    <h4 class="hidden md:block text-xl text-gray-400">{{data.id}}</h4>
                    <h3 class="hidden md:block font-bold text-2xl text-gray-700">{{data.owner}}</h3>
                    <p class="text-gray-600 justify-center">{{data.description}}</p>
                    <img :src="data.photo" class="m-auto my-2 rounded-2xl">
                    <button @click="showItem = true" class="max-w-max bg-blue-600 text-white m-1 p-2 rounded-lg">View</button>
                    <button @click="showItem = true" class="bg-green-500 text-white m-1 p-2 rounded-lg">Edit</button>
                    <button @click="showItem = true" class="bg-red-800 text-white m-1 p-2 rounded-lg">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ItemModal from './ItemModal.vue'

export default defineComponent({
    name: 'Item',
    data(){
        return {
            showItem: false
        }
    },
    props: ['data'],
    components: {
        ItemModal
    }
})
</script>


<style>

</style>
