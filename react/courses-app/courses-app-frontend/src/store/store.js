import { create } from 'zustand'

const useStore = create((set, get) => ({
    user: {
        isAuth: false,
        name: '',
        email: '',
        token: '',
        role: '',
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
    deleteCourse: async (id) => {
        const token = get().user.token;
        const response = await fetch(`http://localhost:4000/courses/${id}`, {
            method: 'DELETE',
            headers: { "accept": "*/*", "Authorization": `Bearer ${token}` }
        })
        if (response.status === 200) {
            set((state) => ({
                courses: state.courses.filter(course => course.id !== id)
            }))
        }
    },
    addAuthor: async (author) => {
        const token = get().user.token;
        const response = await fetch(`http://localhost:4000/authors/add`, {
            method: 'POST',
            headers: { "accept": "*/*", "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
            body: JSON.stringify(author)
        
        })
        console.log(response);
        if (response.status === 200) {
            set((state) => ({
                authors: [...state.authors, author]
            }))
        }
    },
    addCourse: (course) => {
        set((state) => ({
            courses: [...state.courses, course]
        }))
    },
    saveLoginInfo: (userName, email, token) => {
        set((state) => ({
            user: {
                isAuth: true,
                name: userName,
                email: email,
                token: token,
                role: state.user.role,
            }
        }))
    },
    removeLoginInfo: async () => {
        const token = get().user.token;
        const response = await fetch('http://localhost:4000/logout', {
            method: 'DELETE',
            headers: { "accept": "*/*", "Authorization": `Bearer ${token}` }
        })
        if (response.status === 200) {
            set({
                user: {
                    isAuth: false,
                    name: '',
                    email: '',
                    token: '',
                    role: '',
                }
            })
        }
    },
    getUserRole: async () => {
        const token = get().user.token;
        const response = await fetch(`http://localhost:4000/users/me`, {
            method: 'GET',
            headers: { "accept": "*/*", "Authorization": `Bearer ${token}` }
        })
        const { result } = await response.json();
        if (response.status === 200) {
            set((state) => ({
                user: {
                    isAuth: state.user.isAuth, 
                    name: state.user.name,
                    email: state.user.email,
                    token: state.user.token,
                    role: result.role,
                }
            }))
        }
    },
    updateACourse: async (course) => {
        const token = get().user.token;
        const response = await fetch(`http://localhost:4000/courses/${course.id}`, {
            method: 'PUT',
            headers: { "accept": "*/*", "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
        })
        const { result } = await response.json();
        if (response.status === 200) {
            set((state) => ({
                courses: [state.courses.filter(c => c.id !== course.id), course]
            }))
        }
    },
}));

export default useStore;