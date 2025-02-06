import http from "@/http.common"

class EarningRiskService {
    getWhatIfModel() {
        return http.get("/d262de42-1a9f-4fba-a4c8-a83e53d372f1");
    }
    getOrganizations(){
        return http.get("/541ecc87-6c1b-4858-aefd-a9633ff95ad8")
    }
    getALMGridColumns(){
        return http.get("/93f2ab56-fc37-44a5-b2e1-c92acb8613b0")
    }
    getALMGridData(){
        return http.get("/278417d7-645f-4ae6-bc29-c66eb33d6970")
    }
    getCalculationStatus(){
        return http.get("/50a2ea4c-f4f4-4314-b74f-36b4273d4f39")        
    }
    saveALMData(){
        return http.get('a8a45db5-7fc3-4cca-b8f0-3cbdac2c17c6')
    }
}
export default new EarningRiskService();
