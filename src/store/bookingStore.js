import { create } from "zustand";
// Zustand Store
 export const useBookingStore = create((set) => ({
  selectedDoctor: null,
  isModalOpen: false,
  bookedAppointments: [],
  openModal: (doctor) => set({ selectedDoctor: doctor, isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false, selectedDoctor: null }),
  bookAppointment: (appointment) =>
    set((state) => ({
      bookedAppointments: [...state.bookedAppointments, appointment],
      isModalOpen: false,
      selectedDoctor: null,
    })),
}));