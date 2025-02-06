import {defineStore} from "pinia";
 
export const commonStore = defineStore({
    id: "commonStore",
    state: () => ({
       loader: false,
       workSpaceId: null,
       organizationId: null
    })
});