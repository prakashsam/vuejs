<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <h4 class="text-h5 pl-3">Validation</h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="5">
                <v-card title="Review Reconciliation Warnings for Jan 2023" variant="outlined" class="ml-5">
                    <template v-slot:text>
                        <ul>
                            <li> <a href="/">1 Accounts have Cash Flows errors</a></li>
                            <li> <a href="/">1 Accounts have Cash Flows errors</a></li>
                            <li> <a href="/">1 Accounts have Cash Flows errors</a></li>
                        </ul>
                    </template>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>
ul {
    list-style: none;
}
</style>