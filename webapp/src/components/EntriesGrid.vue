<template>
    <div class="entries-header">
        <h3>Available Entries:</h3>
    </div>
    <div class="entries-grid">
        <div v-for="entry in entries" :key="entry.id" class="entry-item">
            <div class="entry-header">
                <p class="timestamp">{{ formatDate(entry.timestamp) }}</p>
                <div class="buttons">
                    <button @click="copyEntry(entry.id)" title="Copy item">
                        <img src="../assets/media/copy_icon.png" class="copy-icon">
                    </button>
                    <button @click="deleteEntry(entry.id)" title="Delete item">
                        <img src="../assets/media/delete_icon.png" class="delete-icon">
                    </button>
                </div>
            </div>
            <p class="entry-content">{{ entry.content.content }}</p>
        </div>
        <div v-if="entries.length === 0" class="no-data">No Data</div>
    </div>
    <div class="entries-footer">
        <button @click="fetchEntries">Refresh</button>
        <button @click="clearAllEntries">Clear All</button>
    </div>
</template>
  
<script>
import Cookies from 'js-cookie';
const host = `${window.location.host}`;
const route = process.env.VUE_APP_BACKEND_ROUTE;
const endpoint = `https://${host}/${route}`;

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

        // Fetch all entries
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

        // Clear all entries
        async clearAllEntries() {
            const confirmation_text = "Hold on a second 🙅 🙆 \nAre you sure you want to delete all entries 🤷 ⁉️";
            let confirmation = confirm(confirmation_text);
            if (!confirmation) {
                return;
            }

            const jwt = Cookies.get('jwt');
            console.log(`Sending DELETE (ALL) request to endpoint: ${endpoint}`)
            try {
                const response = await fetch(endpoint, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    }
                });
                if (response.ok) {
                    console.log('All entries cleared successfully!');
                    this.fetchEntries();
                } else {
                    console.error('Failed to clear entries:', response.status, response.statusText);
                    alert('You are not authorized to perform this operation. Login with higher privileges !');
                }
            } catch (error) {
                console.error('Error clearing entries:', error);
            }
        },

        // Delete one
        async deleteEntry(entryId) {
            const jwt = Cookies.get('jwt');
            console.log(`Sending DELETE (${entryId}) request to endpoint: ${endpoint}`)
            try {
                const response = await fetch(endpoint, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${jwt}`,
                    },
                    body: JSON.stringify({ id: entryId }),
                });
                if (response.ok) {
                    console.log('Entry deleted successfully!');
                    this.entries = this.entries.filter((entry) => entry.id !== entryId);
                } else {
                    console.error('Failed to delete entry:', response.status, response.statusText);
                    alert('You are not authorized to perform this operation. Login with higher privileges !');
                }
            } catch (error) {
                console.error('Error deleting entry:', error);
            }
        },

        formatDate(timestamp) {
            const date = new Date(timestamp);
            const options = {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZone: "Europe/Paris",
            };
            return date.toLocaleString("fr-FR", options);
        },
    },
};
</script>

