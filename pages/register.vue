<template>
        <Register />
</template>

<script>
    import Register from '~/components/Auth/RegisterForm.vue';
export default {
    middleware: ['guest'],
    
    components: {
        Register,
    }
}
</script>

<style>

</style>
