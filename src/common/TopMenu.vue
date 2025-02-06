<template>
   <v-toolbar app  class="menu">
      <v-toolbar-items  class="menu" variant="plain" >
        <v-btn           
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path" :active="item.active" :active-color="item.active ? 'highlighted' : ''">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const menuItems = reactive(
    [
          { title: 'Dashboard', path: '/' },
          { title: 'Profitability', path: '/' },
          { title: 'Pricing', path: '/'},
          { title: 'Forecasting', path: '/'},
          { title: 'ALM', path: '/', active: true },
          { title: 'CECL', path: '/' },
          { title: 'SETUP', path: '/' },
     ]  
)
</script>

<style scoped>
.menu{
    background: #fff;
}
.text-highlighted{
    background: rgb(var(--v-theme-surface-light));
    color: blue;
}
</style>