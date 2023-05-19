<template>
    <div class="entries-header">
        <h3>Available Entries:</h3>
    </div>
    <div class="entries-grid">
        <div v-for="entry in entries" :key="entry.id" class="entry-item">
            <p class="entry-content">{{ entry.content.content }}</p>
            <p class="timestamp">{{ formatDate(entry.timestamp) }}</p>
        </div>
        <div v-if="entries.length === 0" class="no-data">No Data</div>
    </div>
    <div class="entries-footer">
        <button @click="fetchEntries">Refresh</button>
        <button @click="clearAllEntries">Clear All</button>
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
            entries: [],
        };
    },
    mounted() {
        this.fetchEntries();
    },
    methods: {
        async fetchEntries() {
            console.log(`Fetching GET request from endpoint: ${endpoint}`)
            try {
                const response = await fetch(endpoint);
                if (response.ok) {
                    console.log("Succesfully loaded entries !")
                    this.entries = await response.json();
                } else {
                    console.error('Failed to fetch entries:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error fetching entries:', error);
            }
        },

        async clearAllEntries() {
            try {
                const response = await fetch(endpoint, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    console.log('All entries cleared successfully!');
                    this.entries = [];
                } else {
                    console.error('Failed to clear entries:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error clearing entries:', error);
            }
        },

        formatDate(timestamp) {
            const date = new Date(timestamp);
            return date.toLocaleDateString();
        },
    },
};
</script>

