<template>
    <div v-show="isActive" class="border-4 border-gray-400 px-10 py-3 bg-blue-100 m-6">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            name: {required: true},
            selected: {default: false}
        },
        data() {
            return {
                isActive: false
            }
        },
        computed: {
            href() {
                return '#' +this.name.toLowerCase().replace(/ /g, '-');
            }
        },
        mounted() {
            this.isActive = this.selected;
        }
    }
</script>

<style lang="scss" scoped>

</style>