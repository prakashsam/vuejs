export default interface WhatIfOption {
    whatIfID: number;
    name: string;
}
export default interface Organizations {
    id: number;
    name: string;
}
export enum ReadResultToggle {
    Cummulative = 1,
    YTD = 2
}
export interface Columns {
    title: string
    dataType: number
    parentID: number
    precision: number
    protected: boolean
    selected: boolean
    columnId: number
    displayOrder: number
    includeColumn: boolean
    includeLowerLimit: boolean
    includePercentChange: boolean
    includeUpperLimit: boolean
    includeValueChange: boolean
  }
  export interface ALMGridData {
    name: string
    scenarioID?: number
    _2: number
    _2Change: number
    _2ChangePercent: number
    _2LowerLimit: number
    _2UpperLimit: number
    _1: number
    _87: number
    _90: number
  } 
  export interface SaveALMData {
    whatIfID: number
    OrganizationID: number
    ReadToggle: boolean
    gridData: ALMGridData
  }