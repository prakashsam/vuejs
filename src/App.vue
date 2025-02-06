<template>
  <v-app class="wrapper">
    <v-app-bar>
      <v-app-bar-title>Earning At Risk POC</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <TopMenu />
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn variant="text" v-bind="props">
            Earning at Risk<v-icon icon="$vuetify"></v-icon>/
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <router-link to="/"><v-list-item-title>
                EarningResults
              </v-list-item-title></router-link>
          </v-list-item>
          <router-link to="/validation">
            <v-list-item>
              <v-list-item-title>
                Validation
              </v-list-item-title>
            </v-list-item></router-link>
        </v-list>
      </v-menu>
      <div class="progressWrap" v-if="store.loader">
        <v-progress-circular color="indigo-darken-2 progress" model-value="20" indeterminate></v-progress-circular>
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { commonStore } from "@/stores/CommonStore";

const store = commonStore();
</script>
<style lang="scss" scoped>
.progressWrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 1;
}

.progress {
  position: absolute;
  top: 50%;
  left: 50%;
}

.wrapper {
  width: 1600px;
  margin: 0 auto;
}
</style>