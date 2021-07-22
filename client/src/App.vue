<template>
  <div class="bg-white rounded-off">
    <header class="p-5 space-x-10 justify-left bg-white">
      <div class="container flex"> 
        <div class="justify-center items-center cursor-pointer hover:animate-wiggle">
          <img @click="Iclick()" src="@/assets/PrintureLogos/printurelogo_header.png">
        </div>
        <div class="md:flex md:flex-row md:ml-auto">
          <!-- border-red-800 -->
          <div v-if='startPage'>
            <router-link to='/items' class="p-2 text-base font-medium text-black hover:text-red-800 m-5 border-b-4 hover:border-red-800">Items</router-link>
            <router-link to='/home' class="p-2 text-base font-medium text-black hover:text-red-800 m-5 border-b-4 hover:border-red-800">Home</router-link>
          </div>

          <div v-if="homePage">
            <router-link to='/items' class="p-2 text-base font-medium text-black hover:text-red-800 m-5 border-b-4 hover:border-red-800">Items</router-link>
            <router-link to='/home' class="p-2 text-base font-medium text-black hover:text-red-800 m-5 border-b-4 border-red-800">Home</router-link>
          </div>
          
          <div v-if='itemsPage'>
            <router-link to='/items' class="p-2 text-base font-medium text-black hover:text-red-800 m-5 border-b-4 border-red-800">Items</router-link>  
            <router-link to='/home' class="p-2 text-base font-medium text-black hover:text-red-800 m-5 border-b-4 hover:border-red-800">Home</router-link>
          </div>
        </div>
      </div>
    </header>
    <section as="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    Iclick(){
      console.log('click')
    }
  },
  comoponents:{},
  computed: {
    startPage(){
      if(this.$route.path === '/'){
        return true
      }else{
        return false
      }
    },
    homePage(){
      if(this.$route.path === '/home'){
        return true
      }else{
        return false
      }
    },
    itemsPage(){
      if(this.$route.path === '/items'){
        return true
      }else{
        return false
      }
    }
  }
})
</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
