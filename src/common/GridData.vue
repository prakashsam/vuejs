<template>
    <v-data-table :headers="columns" :items="gridData" item-value="name">
        <template v-slot:headers="{ columns }">
            <tr>
                <template v-for="column in columns" :key="column.key">
                    <th>
                        <span class="mr-2 cursor-pointer">{{ column.title }}</span>
                    </th>
                </template>
            </tr>
        </template>
        <template v-slot:item="{ item }">
            <tr>
                <td>{{ item.name }}</td>
                <td>{{ item._2 }}</td>
                <td>{{ item._2Change }}</td>
                <td>{{ item._2ChangePercent }}</td>
                <td>
                    <v-text-field v-model="item._2LowerLimit" type="number"></v-text-field>
                </td>
                <td>
                    <v-text-field v-model="item._2UpperLimit" type="number"></v-text-field>
                </td>
                <td>{{ item._1 }}</td>
                <td>{{ item._87 }}</td>
                <td>{{ item._90 }}</td>
            </tr>
        </template>
    </v-data-table>
</template>

<script setup lang="ts">
import { ALMGridData, Columns } from '@/type/Controls';

interface Props {
    columns: Columns[]
    gridData: ALMGridData[]
}

defineProps<Props>()
</script>

<style scoped></style>