<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title>{{ appName }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="logout">
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer expand-on-hover rail app v-model="drawer">
            <v-list dense>
                <v-list-item v-for="(item, index) in items" :key="index" @click="selectItem(item)">
                    <template v-slot:prepend>
                        <v-icon>{{ item.icon }}</v-icon>
                    </template>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container>
                <component :is="selectedItem.component"></component>
            </v-container>
        </v-main>
    </v-app>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue';
import Dashboard from '../dashboard/Dashboard.vue';
import MyProfile from '../myProfile/MyProfile.vue';
import Transactions from '../transactions/Transactions.vue';
import Transfer from '../transferMoney/Transfer.vue';
import { useStore } from '../../store';
import router from '../../router';
export default defineComponent({
    name: "Account",
    setup() {
        const store = useStore();
        const items = [
            { icon: "mdi-bank", text: "Home", component: Dashboard },
            { icon: "mdi-account", text: "Profile", component: MyProfile },
            { icon: "mdi-bank-transfer", text: "Transfer", component: Transfer },
            { icon: "mdi-history", text: "Transactions", component: Transactions },
        ];
        const drawer = true;
        const appName = "WAR BANK";
        let selectedItem = ref(items[0]);
        const selectItem = (item: any) => {
            selectedItem.value = item;
        }
        const logout = () => {
            store.setApikey('');
            router.push('/')
        };
        return {
            items,
            selectedItem,
            drawer,
            appName,
            selectItem,
            logout
        }
    }
})
</script>
<style scoped>
</style>