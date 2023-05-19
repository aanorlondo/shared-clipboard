<template>
    <h1>{{ title }}</h1>
    <img src="../assets/media/icon_2.png" id="header-logo">
</template>
  
<script>
export default {
    name: 'Header',
    data() {
        return {
            title: 'My Shared clipboards App',
        };
    },
};
</script>
  