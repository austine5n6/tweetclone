<template>
  <div>
    <!-- <Navbar /> -->

    <main class="grid md:grid-rows-2 md:grid-flow-col h-screen">
       <div class="bg-blue-300 row-span-2 grid content-center px-10 font-semibold">
           <span class="flex py-5 hover:text-gray-100"> <img class="w-6" src="~/assets/search.png" alt="search" />
               <h3 class="px-2">follow your interests</h3>
                </span>
            <span class="flex py-5 hover:text-gray-100"><img class="w-6" src="~/assets/group.png" alt="group">
             <h3 class="px-2">Hear what people are talking about</h3>
            </span>

          <span class="flex py-5 hover:text-gray-100"><img class="w-6" src="~/assets/comments.png" alt="comments">
               <h3 class="px-2">Join the conversation</h3>
          </span>
         
       </div>

       <div>
            <img class="w-9" src="~/assets/twitter.png" alt="twitter icon">
          <h2 class="text-sm font-semibold text-gray-800 leading-tight">See whats happening in the world right now</h2>
          <p class="flex justify-center mt-4 text-sm font-bold">Join Twitter today</p>
          
          
            <div class="mt-4 flex justify-center">
              <nuxt-link to="/register" class="inline-block bg-blue-600 px-32 py-3 rounded-full font-bold text-white border-4 md:hover:bg-blue-500 tracking-wider" >Signup</nuxt-link>
            </div>

             <div class="mt-2 flex justify-center">
              <nuxt-link to="/login" class="inline-block bg-white px-32 py-3 rounded-full font-bold text-blue-500 border-4 border-gray-300 md:hover:bg-gray-200 tracking-wider" >Login</nuxt-link>
            </div>
         
              

       </div>
    </main>
    
  </div>
</template>

<script>
import vue from 'vue';
import Navbar from '~/components/Navbar.vue';
import Notification from '~/components/Notification.vue';
export default {
  middleware: ['guest'],
  
  components: {
    Navbar,
 },

  head(){
    return {
      title: 'Home'
    }
  },

}
</script>

<style scoped>
h2 {
  margin-top: 100px;
  color: black; 
  text-align: center;
  font-size: 28px;
}

</style>
