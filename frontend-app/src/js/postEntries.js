const host = process.env.BACKEND_HOST || 'clipboard-app';
const port = process.env.BACKEND_PORT || '8080';
const route = process.env.BACKEND_ROUTE || 'clipboards';
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