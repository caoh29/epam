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
        set((state) => {
            const existingIds = state.courses.map((course) => course.id)
            const newCourses = result.filter((course) => !existingIds.includes(course.id))
            return { courses: [...state.courses, ...newCourses] }
        })
    },
    updateAuthors: async () => {
        const response = await fetch('http://localhost:4000/authors/all')
        const { result } = await response.json()
        set((state) => {
            const existingIds = state.authors.map((author) => author.id)
            const newAuthors = result.filter((author) => !existingIds.includes(author.id))
            return { authors: [...state.authors, ...newAuthors] }
        })
    },
    deleteCourse: (id) => {
        set((state) => ({
            courses: state.courses.filter(course => course.id !== id)
        }))
    },
    addAuthor: (author) => {
        set((state) => ({
            authors: [...state.authors, author]
        }))
    },
    addCourse: (course) => {
        set((state) => ({
            courses: [...state.courses, course]
        }))
    },
    saveLoginInfo: (userName, email, token) => {
        set({
            user: {
                isAuth: true,
                name: userName,
                email: email,
                token: token
            }
        })
    },
    removeLoginInfo: () => {
        set({
            user: {
                isAuth: false,
                name: '',
                email: '',
                token: '',
            }
        })
    }
}));

export default useStore;