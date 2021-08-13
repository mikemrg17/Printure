<template>
    <div class="flex p-10">
        <div class="w-6/12">
            <img src="@/assets/Objects/3DPrinter.png" class="m-auto" alt="">
            <p>Buy and get your prints made by a modern 3D printer</p>
        </div>
        <LogInForm
            @log-in="onLogIn"
        />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import store from '@/store'
import LogInForm from '@/components/LogInForm.vue'

export default defineComponent({
    name: 'LogIn',
    components: {
        LogInForm
    },
    methods:{
        onLogIn(session){
            store.dispatch.users.logIn(session)
        }
    }
})
</script>


<style>

</style>