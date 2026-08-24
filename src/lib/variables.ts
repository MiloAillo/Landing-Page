export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const backendUrlWithPrefix = import.meta.env.VITE_BACKEND_URL_WITH_PREFIX

if (!backendUrl) {
    console.warn("VITE_BACKEND_URL is not defined. Please check your .env file.")
}

if (!backendUrlWithPrefix) {
    console.warn("VITE_BACKEND_URL_WITH_PREFIX is not defined. Please check your .env file.")
}