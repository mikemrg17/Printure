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
        <div v-show="editItemModal">
            <EditItemModal 
                @close-modal="editItemModal = false"
                @edit-item="onEditItem"
                :info='{
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    owner: data.owner,
                    photo: data.photo
                }'
            />
        </div>
        <div v-show="deleteItemModal">
            <DeleteItemModal 
                @close-modal="deleteItemModal = false"
                @delete-item="onDeleteItem(data.id)"
                :info='{
                    id: data.id,
                    description: data.description,
                    owner: data.owner
                }'
            />
        </div>
        <div>
            <div class="max-w-xs border border-gray-300 m-auto my-1 shadow-xl rounded-lg hover:transition duration-500 hover:ease-in-out hover:transform hover:-translate-y-1 hover:scale-110">
                <div class="p-8 mx-2 bg-white">
                    <h4 class="hidden md:block text-xl text-gray-400">{{data.id}}</h4>
                    <h3 class="hidden md:block font-bold text-2xl text-gray-700">{{data.owner}}</h3>
                    <p class="text-gray-600 justify-center">{{data.description}}</p>
                    <img :src="data.photo" class="m-auto my-2 rounded-2xl transform">
                    <button @click="showItem = true" class="max-w-max bg-blue-600 text-white m-1 p-2 rounded-lg hover:bg-blue-700">View</button>
                    <button @click="editItemModal = true" class="bg-green-500 text-white m-1 p-2 rounded-lg hover:bg-green-600">Edit</button>
                    <button @click="deleteItemModal = true" class="bg-red-700 text-white m-1 p-2 rounded-lg hover:bg-red-800">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ItemModal from './ItemModal.vue'
import EditItemModal from './EditItemModal.vue'
import DeleteItemModal from './DeleteItemModal.vue'

export default defineComponent({
    name: 'Item',
    data(){
        return {
            showItem: false,
            editItemModal: false,
            deleteItemModal: false
        }
    },
    props: ['data'],
    components: {
        ItemModal,
        EditItemModal,
        DeleteItemModal
    },
    methods:{
        onDeleteItem(id:Number){
            this.deleteItemModal= false
            this.$emit('delete-item', id)
        },
        onEditItem(item:any){
            this.editItemModal = false
            this.$emit('edit-item', item)
        }
    }
})
</script>


<style>

</style>
