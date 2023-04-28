<template>
    <v-card>
        <v-card-title class="headline">Account Summary</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="top-card">
            <div>
                Account Type: Savings
            </div>
            <div>
                Account Holder: Bhanu Prakash Bakkolla
            </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="bottom-card">
            <v-btn><v-icon start icon="mdi-cash-check"></v-icon> Check Balance
            </v-btn>
            <div>
                <v-icon start icon="mdi-currency-inr"></v-icon> ****
            </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
            <v-btn>View Recent Transactions</v-btn>
            <v-table>
                <thead>
                    <tr>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                            Calories
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card-text>
    </v-card>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Dashboard",
    setup() {
        const itemsPerPage = 5;
        const desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ];
        return {
            itemsPerPage,
            desserts
        }
    },
});
</script>

<style>
.top-card {
    display: flex;
    justify-content: space-evenly;
}

.bottom-card {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
  