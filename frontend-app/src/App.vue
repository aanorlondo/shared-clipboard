<template>
  <div id="app">
    <Header />
    <div class="app-content">
      <div class="entries-grid-wrapper">
        <EntriesGrid />
      </div>
      <div class="form-wrapper">
        <EntriesForm />
      </div>
      <div class="footer-wrapper">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import EntriesGrid from './components/EntriesGrid.vue';
import EntriesForm from './components/EntriesForm.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    EntriesGrid,
    EntriesForm,
    Footer,
  },
};
</script>



<style>
@import "@/assets/css/main.css";
</style>