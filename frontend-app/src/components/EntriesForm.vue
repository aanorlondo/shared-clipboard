<template>
    <div class="entry-form">
        <h3>Add new entry:</h3>
        <form @submit.prevent="addEntry">
            <textarea type="text" v-model="newEntry.content" placeholder="Paste Clipboard here"
                class="entry-form resizable"></textarea>
            <div class="submit-wrapper">
                <button type="submit" class="entry-button">Save</button>
            </div>
        </form>
    </div>
</template>
  
<script>
const host = process.env.VUE_APP_BACKEND_HOST || 'clipboard-app-service';
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
  