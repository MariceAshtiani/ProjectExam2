import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useUserStore = create(
    devtools(
        persist(
            (set) => ({
                user: null,
                isLoggedIn: false, // Add a flag for logged in status
                isVenueManager: false, // Add a flag for venue manager status
                setUser: (user) => set({ user, isLoggedIn: true }), //Update user and set isLoggedIn to true
                setVenueManger: (isVenueManager) => set({ isVenueManager }),
                logout: () => set({ user: null, isLoggedIn: false, isVenueManager: false }),
            }),
            { name : "store" }
        )
    )
);