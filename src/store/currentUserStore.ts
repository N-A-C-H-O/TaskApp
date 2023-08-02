import { create } from "zustand";
import { User } from "../types";

interface CurrentUserState {
    currentUser: User | null;
    setOne: (user: User) => void;
}

export const useCurrentUserStore = create<CurrentUserState>((set, /* get */) => ({
    currentUser: null,
    setOne: (user) => {
        set(() => ({
            currentUser: user
        }));
    }
}));
