<template>
    <div class="entries-grid">
        <h3>Available Entries:</h3>
        <div v-for="entry in entries" :key="entry.id" class="entry-item">
            <p class="content">{{ entry.content }}</p>
            <p class="timestamp">{{ formatDate(entry.timestamp) }}</p>
        </div>
        <div v-if="entries.length === 0" class="no-data">No Data</div>
    </div>
</template>
  
<script src="../js/getEntries.js"></script>