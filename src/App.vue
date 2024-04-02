<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <router-view></router-view>
    </div>
</template>

<script>
    import HeaderComponent from "@/components/HeaderComponent.vue";
    export default {
        components: {
            HeaderComponent
        }
    }
</script>

<style>
    body {
        margin: 0;
    }
</style>