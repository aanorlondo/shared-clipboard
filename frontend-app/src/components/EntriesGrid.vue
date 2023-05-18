<template>
    <div class="container">
        <div class="entries-header">
            <h3>Available Entries:</h3>
            <button class="refresh-button" @click="fetchEntries">Refresh</button>
        </div>
        <div class="entries-grid">
            <div v-for="entry in entries" :key="entry.id" class="entry-item">
                <p class="entry-content">{{ entry.content.content }}</p>
                <p class="timestamp">{{ formatDate(entry.timestamp) }}</p>
            </div>
            <div v-if="entries.length === 0" class="no-data">No Data</div>
        </div>
    </div>
</template>
  
<script src="../js/getEntries.js"></script>