<template>

      <header class="bg-blue-100 sm:flex sm:justify-between border-b border-gray-400">
          <div class="flex justify-between items-center">
              <div class="px-16 py-6 text-2xl uppercase semibold hover:text-blue-300">
                   <h2><a href="/">
                     <span class="flex"><img class="w-7 h-8" src="~/assets/twitter.png" alt="tweetclone icon">
                       Tweetclone
                       </span></a> 
                   </h2>
                 
                       </div>
                      

                   <button @click="isOpen = !isOpen" class="px-6 py-3 sm:hidden">
                      <img v-if="!isOpen" src="~/assets/menu.png" alt="menu" class="w-8 h-8" />
                         <img v-if="isOpen" src="~/assets/cross.png" alt="menu" class="w-8 h-8" />

                    </button>
               </div>

      <div :class="isOpen ? 'block': 'hidden'" class="px-16 py-2 sm:flex sm:items-center">
          <div v-if="isAuthenticated" class="text-gray-600 hover:text-blue-600">
                @{{ loggedInUser.username }}
          </div>
        <nuxt-link v-if="!isAuthenticated" to="/login" class="block mr-2 text-xl hover:text-blue-500 md:border-2 md:border-blue-200 p-2 md:rounded-full md:hover:bg-blue-200">Login</nuxt-link>

         <nuxt-link v-if="isAuthenticated" class="block mr-2 text-xl hover:text-blue-500 md:border-2 md:border-blue-200 p-2 md:rounded-full md:hover:bg-blue-200 md:hover:text-white" to="/dashboard">Dashboard</nuxt-link>

         <a v-if="isAuthenticated" class="block mr-2 text-xl hover:text-blue-500 md:border-2 md:border-blue-200 p-2 md:rounded-full md:hover:bg-blue-200 cursor-pointer md:hover:text-white" @click="signout">Logout</a>

        <a href="/about" class="block mr-2 text-xl hover:text-blue-500 md:border-2 md:border-blue-200 p-2 md:rounded-full md:hover:bg-blue-200 md:hover:text-white">About</a>
      </div>
         </header>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
      data() {
        return {
          isOpen: false
        }
      },
      mounted() {
        this.isAuthenticated;
      },
      computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
      },
      
      // mounted() {
      //  const getUser = localStorage.getItem('tweetr-token')
       
      //  if(getUser) {
      //    this.loggedIn = true;
      //    console.log(getUser)
      //  }else {
      //    this.loggedIn = false;
      //    localStorage.removeItem('tweetr-token')
      //  }
       
      // },
      methods: {
        async signout() {
            await this.$auth.logout();
          //  localStorage.removeItem('tweetr-token')
          // this.$router.push('/')

         
        }
      }
}
</script>

<style>
   
</style>
