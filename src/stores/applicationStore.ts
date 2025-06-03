
import { create } from 'zustand';
import { Application, PriorityScore, Offer } from '@/types';

interface ApplicationState {
  applications: Application[];
  priorityScores: PriorityScore[];
  offers: Offer[];
  currentApplication: Application | null;
  setApplications: (applications: Application[]) => void;
  addApplication: (application: Application) => void;
  updateApplication: (id: string, updates: Partial<Application>) => void;
  setCurrentApplication: (application: Application | null) => void;
  addPriorityScore: (score: PriorityScore) => void;
  updatePriorityScore: (id: string, updates: Partial<PriorityScore>) => void;
  addOffer: (offer: Offer) => void;
  updateOffer: (id: string, updates: Partial<Offer>) => void;
}

export const useApplicationStore = create<ApplicationState>((set, get) => ({
  applications: [],
  priorityScores: [],
  offers: [],
  currentApplication: null,
  setApplications: (applications) => set({ applications }),
  addApplication: (application) => 
    set((state) => ({ applications: [...state.applications, application] })),
  updateApplication: (id, updates) =>
    set((state) => ({
      applications: state.applications.map((app) =>
        app.id === id ? { ...app, ...updates } : app
      ),
    })),
  setCurrentApplication: (application) => set({ currentApplication: application }),
  addPriorityScore: (score) =>
    set((state) => ({ priorityScores: [...state.priorityScores, score] })),
  updatePriorityScore: (id, updates) =>
    set((state) => ({
      priorityScores: state.priorityScores.map((score) =>
        score.id === id ? { ...score, ...updates } : score
      ),
    })),
  addOffer: (offer) =>
    set((state) => ({ offers: [...state.offers, offer] })),
  updateOffer: (id, updates) =>
    set((state) => ({
      offers: state.offers.map((offer) =>
        offer.id === id ? { ...offer, ...updates } : offer
      ),
    })),
}));
