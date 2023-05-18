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
  
<script src="../js/postEntries.js"></script>
  