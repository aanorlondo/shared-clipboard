<template>
    <h1>{{ title }}</h1>
    <a :href="url">
        <img src="../assets/media/icon_2.png" id="header-logo" alt="Logo">
    </a>
</template>
  
<script>
export default {
    name: 'Header',
    data() {
        return {
            title: 'My Shared Clipboards App',
            url: ''
        };
    },
    mounted() {
        this.url = `http://${window.location.host}`;
    }
};
</script>