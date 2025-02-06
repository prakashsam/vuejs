// import { mount } from '@vue/test-utils'
import { ref, nextTick } from 'vue'
import EarningRiskComponent from '@/components/EarningRiskComponent.vue' // path to your component
import EarningRiskService from '@/services/EarningRiskService'
import { commonStore } from '@/stores/CommonStore'
import { vi } from 'vitest'

// Mocking the imported services and stores
vi.mock('@/services/EarningRiskService', () => ({
  getWhatIfModel: vi.fn(),
  getOrganizations: vi.fn(),
  getALMGridColumns: vi.fn(),
  getALMGridData: vi.fn(),
  saveALMData: vi.fn()
}))

vi.mock('@/stores/CommonStore', () => ({
  commonStore: vi.fn(() => ({
    loader: false
  }))
}))

describe('EarningRiskComponent', () => {
  let wrapper: any
  const store = commonStore()

  beforeEach(async () => {
    // Mocking API responses
    EarningRiskService.getWhatIfModel.mockResolvedValue({ data: [{ id: 1, name: 'Option 1' }] })
    EarningRiskService.getOrganizations.mockResolvedValue({ data: [{ id: 1, name: 'Org 1' }] })
    EarningRiskService.getALMGridColumns.mockResolvedValue({ data: { columns: ['col1', 'col2'] } })
    EarningRiskService.getALMGridData.mockResolvedValue({ data: [{ col1: 'data1', col2: 'data2' }] })
    EarningRiskService.saveALMData.mockResolvedValue({})

    wrapper = mount(EarningRiskComponent)
    await nextTick()
  })

  it('should fetch data on mount', async () => {
    // Check if data fetching methods were called
    expect(EarningRiskService.getWhatIfModel).toHaveBeenCalled()
    expect(EarningRiskService.getOrganizations).toHaveBeenCalled()
    expect(EarningRiskService.getALMGridColumns).toHaveBeenCalled()
    expect(EarningRiskService.getALMGridData).toHaveBeenCalled()

    // Check if the correct data is set in component state
    expect(wrapper.vm.whatIfOptions).toEqual([{ id: 1, name: 'Option 1' }])
    expect(wrapper.vm.organizationOptions).toEqual([{ id: 1, name: 'Org 1' }])
    expect(wrapper.vm.columns).toEqual(['col1', 'col2'])
    expect(wrapper.vm.gridData).toEqual([{ col1: 'data1', col2: 'data2' }])
  })

  it('should disable fields on initial load and enable on change', async () => {
    // Initially, the `disabled` state should be true
    expect(wrapper.vm.disabled).toBe(true)

    // Simulate a change event (whatIfChanged, organizationChanged, or readToggle)
    await wrapper.vm.onWhatIfChanged('1')  // Trigger change
    expect(wrapper.vm.disabled).toBe(false)

    await wrapper.vm.onOrganizationChanged('1')  // Trigger change
    expect(wrapper.vm.disabled).toBe(false)

    await wrapper.vm.readToggle(1)  // Trigger change
    expect(wrapper.vm.disabled).toBe(false)
  })

  it('should call saveALMData on save', async () => {
    await wrapper.vm.onSave()  // Trigger save action

    // Check that the saveALMData function was called
    expect(EarningRiskService.saveALMData).toHaveBeenCalled()

    // Ensure loader is true when saving, and false after save
    expect(store.loader).toBe(true)
    await nextTick()
    expect(store.loader).toBe(false)
  })

  it('should set disabled to true on cancel', async () => {
    await wrapper.vm.onCancel()  // Trigger cancel action

    // Ensure disabled state is set to true
    expect(wrapper.vm.disabled).toBe(true)
  })

  it('should trigger calculationEarningRisk after debounced 2000ms', async () => {
    const calculationSpy = vi.spyOn(wrapper.vm, 'calculationEarningRisk')

    // Trigger calculationStatus change
    wrapper.vm.calculationStatus = true
    await nextTick()

    // Assert that calculationEarningRisk is called after debounce
    expect(calculationSpy).toHaveBeenCalledTimes(1)
  })
})
