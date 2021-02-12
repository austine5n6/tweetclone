<template>
     <!-- <div class="bg-green-400 text-white text-center w-1/4 py-3 mt-2 font-bold tracking-wider" >
                <h3>Login Successful</h3>
             </div> -->
   <div>
          <Navbar />
        
            <div class="mt-6">
             <h3 class="uppercase text-center text-blue-600 font-bold text-lg tracking-wider ">
                 Welcome {{ loggedInUser.first_name}} {{loggedInUser.last_name}}
                 
            </h3>
             </div>
            <div>
                   <aside class="w-1/5">
                     <ul class="text-gray-700 font-semibold px-16">
                         <nuxt-link to="/">
                            <li class="py-2 hover:text-blue-500 border-r border-red-400 md:hover:bg-blue-100">Timeline</li>
                         </nuxt-link>
                         
                         <nuxt-link to="/profile">
                         <li class="py-2 hover:text-blue-500 md:hover:bg-blue-100">Profile</li>
                         </nuxt-link>

                         <nuxt-link to="/trends">
                         <li class="py-2 hover:text-blue-500 md:hover:bg-blue-100">Trends</li>
                         </nuxt-link>

                         <nuxt-link to="/settings">
                         <li class="py-2 hover:text-blue-500 md:hover:bg-blue-100">Settings</li>
                         </nuxt-link>
                     </ul>
                </aside>
            </div>
   </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import { mapGetters } from 'vuex'
    export default {
        middleware: ['auth'],
        components: {
            Navbar,
            
        },
        computed: {
            ...mapGetters(['loggedInUser'])
        }
    }
</script>

<style lang="scss" scoped>

</style>