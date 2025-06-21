import {create} from 'zustand';

export const useUserStore = create(set => ({
  username: '',
  setUser: username => set({username}),
}));
