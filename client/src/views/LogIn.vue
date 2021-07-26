<template>
    <div class="flex p-10">
        <div class="w-6/12">
            <img src="@/assets/Objects/3DPrinter.png" class="m-auto" alt="">
            <p>Buy and get your prints made by a modern 3D printer</p>
        </div>
        <LogInForm />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import LogInForm from '@/components/LogInForm.vue'

export default defineComponent({
    name: 'LogIn',
    components: {
        LogInForm
    }
})
</script>


<style>

</style>