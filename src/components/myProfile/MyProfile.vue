<template>
    <div>
        <div>
        Welcome {{user}}
        </div>
        <div>
            You've entered MY Profile page
        </div>
    </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:"MyProfile",
    setup(){
        const user: string = "";
        return {
            user
        }
    }
})
</script>
<style>

</style>