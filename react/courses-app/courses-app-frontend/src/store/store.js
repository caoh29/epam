import { create } from 'zustand'


const useStore = create((set) => ({
    user: {
        isAuth: false,
        name: '',
        email: '',
        token: '',
    },
    courses: [],
    authors: [],
}));

export default useStore;