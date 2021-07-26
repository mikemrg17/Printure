<template>
    <div class="border-4 w-1/2 p-7 rounded-xl">
        <h1 class="text-gray-600 font-medium text-lg">New Item</h1>
        <form method="POST" @submit.prevent="onSubmit()">
            <div class="flex my-1">
                <p class="text-md text-gray-500 my-2">Name:</p><input type="text" v-model="name" class="mx-2 bg-gray-200 w-80 rounded-lg p-2">
            </div>
            <div class="flex my-1">
                <p class="text-md text-gray-500 my-2">Owner:</p><input type="text" v-model="owner" class="mx-2 bg-gray-200 w-80 rounded-lg p-2">
            </div>
            <div class="flex my-1">
                <p class="text-gray-500">Description:</p>
                <textarea v-model="description" cols="20" rows="5" class="w-full mx-2 border resize-none bg-gray-200 rounded-lg p-2"></textarea>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <input type="submit" value="Add" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 sm:ml-3 sm:w-auto sm:text-sm"/>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AddItemForm',
    data(){
        return{
            name: '',
            description: '',
            owner: ''
        }
    },
    methods:{
        onSubmit(){
            if(this.name=='' || this.description==='' || this.owner=== ''){
                alert("Please fill the form to add a new item")
                return
            }

            const newItem = {
            photo: 'https://random.imagecdn.app/200/200',
            name: this.name,
            description: this.description,
            owner: this.owner 
            }
            
            this.$emit('add-item', newItem)

            this.name = '',
            this.description = '',
            this.owner = ''
        }
    }
})
</script>


<style>

</style>