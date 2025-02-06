<template>
  <div class="wrapper">
    <v-container fluid>
      <v-row>
        <v-col>
          <h4 class="text-h5">Results</h4>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <ToolBarTop @onCalculation="calculationEarningRisk" @onCalculationCancel="calculationEarningRisk"
            @onSave="onSave" @onCancel="onCancel" :disabled="disabled" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-sheet class="pr-8 mr-8">
            <ToolBarBottom @onWhatIfChanged="onWhatIfChanged" @onOrganizationChanged="onOrganizationChanged"
              @onReadToggleChange="readToggle" :whatIfOptions="whatIfOptions"
              :organizationOptions="organizationOptions" />
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ProgressStatus v-if="calculationStatus" :statusMessage="'Calculation in progress ...'"></ProgressStatus>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <GridData :columns="columns" :gridData="gridData"></GridData>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import EarningRiskService from "@/services/EarningRiskService";
import WhatIfOption, { ALMGridData, Columns } from "@/type/Controls";
import Organizations from "@/type/Controls";
import { commonStore } from "@/stores/CommonStore";
import debounce from 'lodash/debounce'

const disabled = ref(true);
const whatIfOptions = ref<WhatIfOption[]>([])
const organizationOptions = ref<Organizations[]>([])
const columns = ref<Columns[]>([]);
const gridData = ref<any[]>([]);
const calculationStatus = ref(false);
const store = commonStore();

watch(calculationStatus, debounce(() => {
  calculationEarningRisk(false)
}, 2000))

const onWhatIfChanged = (value: String) => {
  disabled.value = false;
  loadGridData();
}
const onOrganizationChanged = (value: String) => {
  disabled.value = false;
  loadGridData();
}
const readToggle = (value: any) => {
  disabled.value = false;
  loadGridData();
}
const onSave = async () => {
  store.loader = true;
  await EarningRiskService.saveALMData();
  store.loader = false;
  disabled.value = true;
}
const onCancel = () => {
  disabled.value = true;
}
const calculationEarningRisk = (status) => {
  calculationStatus.value = status
  console.log('add');
}
const getWhatIfModel = async () => {
  const response = await EarningRiskService.getWhatIfModel();
  whatIfOptions.value = response.data;
}
const getOrganization = async () => {
  const response = await EarningRiskService.getOrganizations();
  organizationOptions.value = response.data;
}
const getALMGridColumns = async () => {
  const response = await EarningRiskService.getALMGridColumns();
  const columnsData = response.data.columns
  columns.value = columnsData;
}
const getALMGridData = async () => {
  const response = await EarningRiskService.getALMGridData();
  const data = response.data
  gridData.value = data;
}
const loadGridData = async () => {
  store.loader = true;
  await getALMGridColumns();
  await getALMGridData();
  store.loader = false;
}

onMounted(async () => {
  store.loader = true;
  await getWhatIfModel();
  await getOrganization();
  await loadGridData();
  store.loader = false;
})
</script>

<style scoped>
.dropDown {
  width: 200px;
}
</style>
