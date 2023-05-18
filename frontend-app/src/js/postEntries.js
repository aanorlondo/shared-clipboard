const host = process.env.VUE_APP_BACKEND_HOST || 'localhost';
const port = process.env.VUE_APP_BACKEND_PORT || '8080';
const route = process.env.VUE_APP_BACKEND_ROUTE || 'clipboards';
const endpoint = `http://${host}:${port}/${route}`;

export default {
    data() {
        return {
            newEntry: {
                content: ''
            },
        };
    },
    methods: {
        async addEntry() {
            try {

                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.newEntry),
                });

                if (response.ok) {
                    console.log('Entry added successfully!');
                    // Reset the form after submitting
                    this.newEntry = {
                        content: ''
                    };
                } else {
                    console.error('Failed to add entry:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error adding entry:', error);
            }
        },
    },
};