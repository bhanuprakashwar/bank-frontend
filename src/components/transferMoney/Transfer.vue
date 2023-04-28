<template>
    <div>
        <div>
        Welcome {{user}}
        </div>
        <div>
            You've entered this Transfer Page
        </div>
    </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:"Transfer",
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