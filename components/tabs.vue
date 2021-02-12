<template>
    <div>
        <div class="mb-5">
            <ul class="flex justify-evenly tracking-widest text-xl text-gray-600 font-semibold">
                <li v-for="tab in tabs" :key="tab.id" :class="{'is-active': tab.isActive }" class="hover:text-blue-500">
                    <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
                </li>
            </ul>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabs: []
            }
        },
        created() {
            this.tabs = this.$children;
        },
        methods: {
            selectTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name == selectedTab.name);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>