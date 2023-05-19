<template>
    <div class="form-container">
        <h3>Add new entry:</h3>
        <div class="entries-form">
            <form @submit.prevent="addEntry">
                <textarea type="text" v-model="newEntry.content" placeholder="Paste Clipboard here"></textarea>
                <div class="submit-wrapper">
                    <button type="submit" class="entry-button">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
const host = process.env.VUE_APP_BACKEND_HOST;
const port = process.env.VUE_APP_BACKEND_PORT;
const route = process.env.VUE_APP_BACKEND_ROUTE;
const endpoint = host == "localhost" ? `http://${host}:${port}/${route}` : process.env.VUE_APP_BACKEND_HOST;

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
            if (this.newEntry.content.trim() === '') {
                // Input is empty, do not proceed with adding the entry
                return;
            }
            try {
                console.log(`Sending POST request: ${JSON.stringify(this.newEntry)} to endpoint: ${endpoint}`)
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.newEntry),
                });

                if (response.ok) {
                    console.log("Entry successfully created !");
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
</script>
  