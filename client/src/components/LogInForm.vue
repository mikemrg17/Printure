<template>
    <div class="w-6/12">
        <form class="w-9/12 rounded px-8 pt-6 pb-8 m-auto" @submit.prevent="onLogIn()">
            <h1 class="text-4xl mb-10 text-blue-700">Log In</h1>
            <div class="mb-4">
                <label class="block text-gray-500 text-sm font-bold mb-2 text-base" for="username">
                    Username
                </label>
                <div class="flex">
                    <i class="fas fa-user m-auto mx-3 text-gray-700"></i><input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                </div>
            </div>
            <div class="mb-6">
                <label class="block text-gray-500 text-sm font-bold mb-2 text-base" for="password">
                    Password
                </label>
                <div class="flex">
                    <i class="fas fa-key m-auto mx-3 text-gray-700"></i><input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                </div>
            </div>
            <div class="flex items-center justify-between">
            <input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Log In"/>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-700" href="#">
                Forgot Password?
            </a>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2021 Printure. All rights reserved.
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LogInForm',
    methods:{
        onLogIn(){
            alert('Logged In')
        }
    }
})
</script>


<style>

</style>