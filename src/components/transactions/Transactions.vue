<template>
    <div>
        <div>
        Welcome {{user}}
        </div>
        <div>
            You've entered this Transactions
        </div>
    </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:"Transactions",
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