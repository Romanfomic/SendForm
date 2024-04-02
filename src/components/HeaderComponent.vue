<template>
    <div class="header">
        <div class="nav-bar">
            <router-link class="nav-bar-item" to="/">Main</router-link>
            <router-link class="nav-bar-item" to="/weather">Weather</router-link>
        </div>
        <hr/>
    </div>
</template>

<script>

    export default {

    }
</script>

<style scoped>
    .nav-bar-item {
        text-decoration: none;
        color: black;
        font-size: 20px;
        font-weight: bold;
        margin: 10px;
        transition: color 0.2s;
    }
    .nav-bar-item:hover {
        color: dodgerblue;
    }
    .header {
        display: flex;
        align-items: center;
        border: 1px solid black;
    }
    .nav-bar {
        display: flex;
        align-items: center;
    }

</style>