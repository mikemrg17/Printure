<template>
  <div class="bg-white rounded-off">
    <header class="p-5 space-x-10 justify-left">
      <div class="container flex"> 
        <div class="justify-center items-center ">
          <img @click="Iclick()" src="@/assets/PrintureLogos/printurelogo_header.png">
        </div>
        <div class="md:flex md:flex-row md:ml-auto">
          <router-link to='/items' class="p-2 text-base font-medium text-black hover:text-red-800 m-5">Items</router-link>
          <router-link v-show="homePage" to='/' class="p-2 text-base font-medium text-black hover:text-red-800 m-5 border-b-4 border-red-800">Home</router-link>
        </div>
      </div>
    </header>
    <section as="content">
      <h1 class="text-4xl font-bold text-red-800">Printing the future</h1>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"


export default defineComponent({
  name: 'Home',
  methods: {
    Iclick(){
      console.log('click')
    }
  },
  computed: {
    homePage(){
      if(this.$route.path === '/'){
        return true
      }else{
        return false
      }
    }
  }
})
</script>
