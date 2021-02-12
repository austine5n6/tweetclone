<template>
    <div>
      
           
           <nuxt-link to="/" class="flex justify-start px-32 py-3 mt-5 items-center">
               <img class="w-12" src="~/assets/back_icon.png" alt="back_icon">
               <span class="font-bold text-xl px-2 text-gray-600 tracking-wider hover:text-blue-300">Back</span>
           </nuxt-link>
           
       
        <h2 class="font-bold text-gray-600 uppercase text-center text-3xl mt-20">join the fun now!</h2>

             <main class="container mx-auto grid mt-10 border-3 border-gray-100"> 
           <div class="flex justify-center mt-5">
                 <form class="form-group" @submit.prevent="login">
                     <Notification 
						:message="notification.message"
						:type="notification.type"
						v-if="notification.message"
						/>
            <div class="relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <img class="w-4" src="~/assets/user.png" alt="user_icon">
                </div>

                <input class="px-10 py-3 border-2 border-blue-600 rounded-lg mb-2 hover:bg-blue-200 focus:ring-4 focus:bg-blue-100" type="text" name="email" v-model="email" placeholder="Email" required=""/>

            </div>

             <div class="relative rounded-md shadow-sm">
                 <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <img class="w-4" src="~/assets/key.png" alt="key_icon">
                 </div>
               <input class="px-10 py-3 border-2 border-blue-600 rounded-lg hover:bg-blue-200 focus:border-blue-300 focus:ring-4 focus:bg-blue-100" type="password" name="password" v-model="password" placeholder="Password" required />

     
             </div>   
               
               <div class="mt-4 ">
                <input type="submit" value="Login" class="inline-block bg-blue-600 px-32 py-3 rounded-full font-bold text-white border-4 md:hover:bg-blue-500 tracking-wider cursor-pointer" />
               </div>

               	<div class="flex"> 
					<ul class="font-bold text-sm text-gray-700 tracking-wider"> 
						<li> Don't have an account? <span class="hover:text-blue-400"> <nuxt-link to="/register">Register</nuxt-link> </span></li>
							</ul>
							</div>  
            
                
            </form>
        </div>
        </main>
    </div>
</template>


<script>
    import axios from 'axios';
    import Notification from '~/components/Notification.vue'
    export default {
          components: {
              Notification,
          },
          
        head() {
            return {
                title: 'Login'
            }
        },
        data() {
            return {
                email: '',
                password: '',
                notification: {
                    message: '',
                    type: '',
                }
            }
        },
    
        methods: {
            async login() {
                    try {                
                     await this.$auth.loginWith('local', {
                        data: {
                            email: this.email,
                            password: this.password,
                        } 
                })
                    // console.log(response);
                    this.$router.push('/dashboard')

                }catch(error) {
                    this.notification = Object.assign({}, this.notification, {
                        message: error.response.data.message,
                        type: error.response.data.status,
                    }) 
                    this.email = '';
                    this.password = '';
                }
            }

        //     login() {
        //         axios.post('http://127.0.0.1:3333/login', {
        //             email: this.email,
        //             password: this.password,
        //         })
        //         .then(response => {
        //             localStorage.setItem('tweetr-token', response.data.data.token)
        //             this.$router.push('/dashboard');
        //         })
        //         .catch(error => {
        //             this.notification = Object.assign({}, this.notification, {
		// 			message: error.response.data.message,
		// 			type: error.response.data.status,
        //         })
        //     })
        // }
     }
}

</script>
<style scoped>
body {
    margin-top: 100px;
}
</style>