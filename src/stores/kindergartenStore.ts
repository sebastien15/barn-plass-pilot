
import { create } from 'zustand';
import { Kindergarten } from '@/types';

interface KindergartenState {
  kindergartens: Kindergarten[];
  currentKindergarten: Kindergarten | null;
  setKindergartens: (kindergartens: Kindergarten[]) => void;
  updateKindergarten: (id: string, updates: Partial<Kindergarten>) => void;
  setCurrentKindergarten: (kindergarten: Kindergarten | null) => void;
}

export const useKindergartenStore = create<KindergartenState>((set) => ({
  kindergartens: [],
  currentKindergarten: null,
  setKindergartens: (kindergartens) => set({ kindergartens }),
  updateKindergarten: (id, updates) =>
    set((state) => ({
      kindergartens: state.kindergartens.map((kg) =>
        kg.id === id ? { ...kg, ...updates } : kg
      ),
    })),
  setCurrentKindergarten: (kindergarten) => set({ currentKindergarten: kindergarten }),
}));
