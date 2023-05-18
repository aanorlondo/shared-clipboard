<template>
  <div id="app">
    <Header />
    <EntriesGrid />
    <EntriesForm />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import EntriesGrid from './components/EntriesGrid.vue';
import EntriesForm from './components/EntriesForm.vue';

export default {
  name: 'App',
  components: {
    Header,
    EntriesGrid,
    EntriesForm,
  },
};
</script>



<style>
@import "@/assets/css/main.css";
</style>