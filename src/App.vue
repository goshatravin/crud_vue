<template>
    <div id="app">
        <UsersView/>
    </div>
</template>

<script>
import UsersView from '@/views/UsersView.vue';

export default {
    name: 'App',
    components: {
        UsersView,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
