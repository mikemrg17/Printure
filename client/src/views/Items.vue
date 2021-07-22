<template>
  <div>
    <div class="flex">
      <button @click="showAddForm = true" v-show="showAddForm == false" class="mx-20 my-5"><i class="fas fa-plus text-gray-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 animate-pulse"></i></button>
      <button @click="showAddForm = false" v-show="showAddForm == true" class="mx-20 my-5"><i class="fas fa-chevron-up text-gray-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 animate-pulse"></i></button>
    </div>
    <div v-show="showAddForm == true" class="flex p-10">
      <AddItemForm
        @add-item="onAddItem"
      />
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in allItems" :key="item.id">
        <Item
          @delete-item="onDeleteItem"
          @edit-item="onEditItem"
          :data='{
            id: item.id,
            name: item.name,
            photo: item.photo,
            description: item.description,
            owner: item.owner
          }'
        />
      </div>  
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Item from '@/components/Item.vue'
import store from '@/store'
import AddItemForm from '@/components/AddItemForm.vue'

export default defineComponent({
  name: 'Items',
  data(){
    return {
      showAddForm: false
    }
  },
  components: {
    Item,
    AddItemForm
  },
  created(){
    store.dispatch.items.fetchItems()
  },
  computed:{
    allItems: () => store.state.items.itemsArray
  },
  methods:{
    onAddItem(newItem){
      store.dispatch.items.addItem(newItem)
    },
    onDeleteItem(id){
      //console.log('Item: ', id)
      //store.state.items.itemsArray = store.state.items.itemsArray.filter((item) => item.id !== id)
      store.dispatch.items.deleteItem(id)
    },
    onEditItem(editedItem){
      //console.log('Item:', item)
      store.dispatch.items.editItem(editedItem)
      /*for(let item of this.allItems){
        if(editedItem.id === item.id){
          console.log(`Edited item id: ${editedItem.id} corresponds with item id: ${item.id}`)
          store.dispatch.items.editedItem(editedItem)
          break
        }
      }*/
    },
    onSubmit(item){
      console.log(item)
    }
  },
  emits: ['delete-item', 'edit-item']
})
</script>

