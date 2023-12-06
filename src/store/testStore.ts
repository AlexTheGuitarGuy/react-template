import { create } from 'zustand'

type TestStore = {
  test: string
  setTest: (test: string) => void
}

export const useTestStore = create<TestStore>((set) => ({
  test: 'test',
  setTest: (test: string) => {
    console.log('setting:', test)

    set({ test })
  },
}))
