<template>
    <v-alert type="info" variant="tonal">
        {{ statusMessage }}
    </v-alert>
</template>

<script setup lang="ts">
defineProps(['statusMessage'])
</script>

<style scoped></style>