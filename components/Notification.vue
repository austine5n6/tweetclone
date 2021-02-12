<template>
    
    <div class="bg-red-400 text-white rounded-lg text-center py-3 mb-2 font-bold tracking-wider" :class="type" >
        {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        }
    }
}
</script>

<style>

</style>
