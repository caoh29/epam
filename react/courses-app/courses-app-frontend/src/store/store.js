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
    updateCourses: async () => {
        const response = await fetch('http://localhost:4000/courses/all')
        const { result } = await response.json()
        set({ courses: result })
    },
    updateAuthors: async () => {
        const response = await fetch('http://localhost:4000/authors/all')
        const { result } = await response.json()
        set({ authors: result })
    },
    deleteCourse: (id) => {
        set((state) => ({
            courses: state.courses.filter(course => course.id !== id)
        }))
    },
}));

export default useStore;