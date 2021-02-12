<template>
      <div>
          <Navbar />
          
               <div class="grid grid-cols-4 grid-flow-col gap-4">
                   
                   
                  <div class="flex mt-5 col-start-1 col-span-1 row-span-2">
                 <aside class="hidden md:block w-4/5 mt-6">
                     <ul class="text-gray-700 font-semibold px-16">
                         <nuxt-link to="/">
                            <li class="py-2 md:hover:text-blue-500 md:hover:bg-blue-100">Timeline</li>
                         </nuxt-link>
                         
                         <nuxt-link to="/profile">
                         <li class="py-2 md:hover:text-blue-500 md:hover:bg-blue-100 md:border-r-0 lg:border-r lg:border-red-400 ">Profile</li>
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
          

            <div class="flex mt-5 justify-around mb-5 col-span-3 col-start-2 col-end-4">
             <h3 class="text-center text-green-600 font-bold text-lg tracking-wider ">
                  {{ loggedInUser.first_name}}
                    {{ loggedInUser.last_name}} <br />
                     <span class="text-blue-500">@{{ loggedInUser.username}}</span>
            </h3>
            <span class="text-gray-700 font-semibold hover:text-blue-500 h-5"><a href="/">Edit profile</a></span>
             </div>

              <span class="row-start-2 col-span-4 flex justify-center text-gray-600 font-semibold"> Bio goes here but you can just keep it short and simple. <br /></span>

            
             <!-- <main class="flex justify-around row-start-2 col-start-2 col-span-2">
                 Bio goes here
             </main> -->

               </div><!--closing div--->

               <div class="flex justify-center tracking-widest text-gray-600 font-semibold">
                   <div class="flex justify-center items-center px-6 py-6">
                       <div class="row-start-1 col-span-1">
                          {{ following }} Following
                       </div>
                       <div class="ml-4">
                          {{ follower }} Followers
                       </div>
                   </div>
               </div>
              
        <main>
            <tabs>
                <tab name="Tweets" :selected="true">
                    <p class="italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat at vel est mollitia quas quasi dolorem eveniet porro numquam exercitationem omnis, magni nemo blanditiis recusandae suscipit facilis adipisci eos iusto?</p>
                </tab>
                <tab name="Reply">
                    <p class="italic">This is the reply tab, all users tweet notification will appear here.</p>
                </tab>
                   <tab name="Favourite">
                    <p class="italic">This is the favourite tab, all tweets here that users favourites will appear here.</p>
                </tab>
                  <tab name="Likes">
                    <p class="italic">This contains tweets that users likes, all tweets here that users likes will appear here.</p>
                
                </tab>
                
                
            </tabs>
        </main>
           
                
   </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import tabs from '~/components/tabs.vue';
import tab from '~/components/tab.vue';

import { mapGetters } from 'vuex'
    export default {
        middleware: ['auth'],
        components: {
            Navbar,
        },
        data() {
            return {
                following: '16',
                follower: '32',
            }
        },
        computed: {
            ...mapGetters(['loggedInUser'])
        },
    }
</script>

<style lang="scss" scoped>

</style>