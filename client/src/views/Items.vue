<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in allItems" :key="item.id">
        <Item
          @delete-item="onDeleteItem"
          :data='{
            id: item.id,
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

export default defineComponent({
  name: 'Items',
  data(){
    return {}
  },
  components: {
    Item
  },
  created(){
    store.dispatch.items.fetchItems()
  },
  computed:{
    allItems: () => store.state.items.itemsArray
  },
  methods:{
    onDeleteItem(id){
      //console.log('Item: ', id)
      //store.state.items.itemsArray = store.state.items.itemsArray.filter((item) => item.id !== id)
      store.dispatch.items.deleteItem(id)
    }
  },
  emits: ['delete-item']
})
</script>

