<template>
    <div class="button-wrap">
        <v-btn @click="onSave" :disabled="disabled" class="mr-5" rounded="pill" variant="outlined">
            Save
        </v-btn>
        <v-btn @click="onCancel" :disabled="disabled"  rounded="pill" variant="outlined">
            Cancel
        </v-btn>
        <span class="ml-4 mr-4">|</span>
        <v-btn @click="onCalculation"  class="mr-5" color="indigo-darken-3" rounded="pill" variant="outlined">
            Calculate
        </v-btn>
        <v-btn @click="onCalculationCancel" :disabled="!calculationStatus"   rounded="pill" variant="outlined">
            Cancel
        </v-btn>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EarningRiskService from "@/services/EarningRiskService";
import { commonStore } from '@/stores/CommonStore';

const emit = defineEmits(['onSave','onCancel','onCalculation', 'onCalculationCancel'])
defineProps(["disabled"]); 

const calculationStatus = ref(false);
const store = commonStore();

const onCalculation = async () => {
    store.loader = true;
    await EarningRiskService.getCalculationStatus().finally(() => store.loader = false);
    calculationStatus.value = true;
    emit('onCalculation', calculationStatus.value)
}
const onCalculationCancel = () => {
    calculationStatus.value = false;
    emit('onCalculationCancel', calculationStatus.value)
}
const onSave = () => {
    emit('onSave')
}
const onCancel = () => {
    emit('onCancel')
}
</script>