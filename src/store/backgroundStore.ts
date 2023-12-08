import { create } from 'zustand';
import backgrounds from '../global/backgrounds';

interface BackgroundListState {
  selected: string;
  selectOne: (background: string) => void;
}

export const useBackgroundListStore = create<BackgroundListState>(set => ({
  selected: backgrounds[0],
  selectOne: background => {
    set(() => ({
      selected: background
    }));
  }
}));
