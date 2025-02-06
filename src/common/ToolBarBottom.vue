<template>
    <div class="mt-20 button mr-8">
        <v-select label="What If" :items="whatIfOptions" @update:modelValue="onWhatIfChanged" item-title="name"
            variant="solo-filled"></v-select>
    </div>
    <div class="mt-20 button mr-8">
        <v-select label="Organization" :items="organizationOptions" @update:modelValue="onOrganizationChanged"
            item-title="name" variant="solo-filled"></v-select>
    </div>
    <div class="mt-1 button">
        <v-btn-toggle @update:modelValue="onReadToggleChange" v-model="readResultTypeToggle">
            <v-btn :value="ReadResultToggle.Cummulative" rounded="pill"
                :active="readResultTypeToggle === ReadResultToggle.Cummulative" active-color="indigo-darken-3">
                <span class="hidden-sm-and-down">Cummulative</span>
            </v-btn>

            <v-btn :value="ReadResultToggle.YTD" :active="readResultTypeToggle === ReadResultToggle.YTD"
                active-color="indigo-darken-3" rounded="pill">
                <span class="hidden-sm-and-down">YTD</span>
            </v-btn>
        </v-btn-toggle>
    </div>
</template>

<script setup lang="ts">
import { ReadResultToggle } from "@/type/Controls";
import { ref } from "vue";

const props = defineProps(["whatIfOptions", "organizationOptions"]);
const emit = defineEmits(['onWhatIfChanged', 'onOrganizationChanged', 'onReadToggleChange'])

const readResultTypeToggle = ref<ReadResultToggle>(ReadResultToggle.Cummulative)

const onWhatIfChanged = () => {
    emit('onWhatIfChanged')
}
const onOrganizationChanged = () => {
    emit('onOrganizationChanged')
}
const onReadToggleChange = () => {
    emit('onReadToggleChange')
}

defineExpose({
    props
});
</script>

<style scoped>
.button {
    float: left;
    width: 250px;
}
</style>