const host = process.env.VUE_APP_BACKEND_HOST || 'localhost';
const port = process.env.VUE_APP_BACKEND_PORT || '8080';
const route = process.env.VUE_APP_BACKEND_ROUTE || 'clipboards';
const endpoint = `http://${host}:${port}/${route}`;

export default {
    data() {
        return {
            entries: [],
        };
    },
    mounted() {
        this.fetchEntries();
    },
    methods: {
        async fetchEntries() {
            try {
                const response = await fetch(endpoint);
                if (response.ok) {
                    this.entries = await response.json();
                } else {
                    console.error('Failed to fetch entries:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error fetching entries:', error);
            }
        },
    },
};