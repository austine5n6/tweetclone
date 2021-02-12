<template>
    <div>
        <Login />
    </div>
        
</template>

<script>
    import Login from '~/components/Auth/LoginForm.vue';
 
export default {
    middleware: ['guest'],
    
    components: {
        Login,    
    }
}
</script>

<style>

</style>
