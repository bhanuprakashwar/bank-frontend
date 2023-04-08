<template>
    <div>
        <div>
        Welcome {{user}}
        </div>
        <div>
            You've entered this page means, the authentication is successfully done
        </div>
    </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:"Account",
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