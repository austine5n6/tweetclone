<template>
    <div>
             <nuxt-link to="/" class="flex justify-start px-32 py-3 mt-5 items-center">
               <img class="w-12" src="~/assets/back_icon.png" alt="back_icon">
               <span class="font-bold text-xl px-2 text-gray-600 tracking-wider hover:text-blue-300">Back</span>
            </nuxt-link>


        <div class="text-center">
             <h2 class="uppercase font-bold text-2xl">register here!</h2>
        </div>

         <main class="container mx-auto grid mt-3 border-3 border-gray-100"> 
           <div class="flex justify-center mt-5">
                 <form class="form-group" @submit.prevent="register">
                     <Notification 
						:message="notification.message"
						:type="notification.type"
						v-if="notification.message"
						/>
               <div class="flex justify-center"><!--initial div --->
                 <div class="relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img class="w-6" src="~/assets/user.png" alt="user_icon">
                    </div>
                <input class="px-10 py-3 border-2 border-gray-600 rounded-lg mb-2 hover:bg-blue-200 focus:ring-4 focus:bg-blue-100" type="text" name="first_name" v-model="first_name" placeholder="First Name" required />

            </div>
                 </div><!-- end div -->

               <div class="flex justify-center"><!--initial div --->
                 <div class="relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img class="w-6" src="~/assets/user.png" alt="user_icon">
                    </div>
                <input class="px-10 py-3 border-2 border-gray-600 rounded-lg mb-2 hover:bg-blue-200 focus:ring-4 focus:bg-blue-100" type="text" name="last_name" v-model="last_name" placeholder="Last Name" required />

            </div>
                 </div><!-- end div -->

             <div class="flex justify-center"><!--initial div --->
                 <div class="relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img class="w-6" src="~/assets/username.png" alt="username_icon">
                    </div>
                <input class="px-10 py-3 border-2 border-gray-600 rounded-lg mb-2 hover:bg-blue-200 focus:ring-4 focus:bg-blue-100" type="text" name="username" v-model="username" placeholder="Username" required />

            </div>
                 </div><!-- end div -->

               <div class="flex justify-center"><!--initial div --->
                 <div class="relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img class="w-6" src="~/assets/email.png" alt="email_icon">
                    </div>
                <input class="px-10 py-3 border-2 border-gray-600 rounded-lg mb-2 hover:bg-blue-200 focus:ring-4 focus:bg-blue-100" type="text" name="email" v-model="email" placeholder="Email" required />

            </div>
                 </div><!-- end div -->

                <div class="flex justify-center"><!--initial div --->
                 <div class="relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <img class="w-6" src="~/assets/key.png" alt="key_icon">
                    </div>
                <input class="px-10 py-3 border-2 border-gray-600 rounded-lg mb-2 hover:bg-blue-200 focus:ring-4 focus:bg-blue-100" type="password" name="password" v-model="password" placeholder="Password" required=""/>

            </div>
                 </div><!-- end div -->   
               
               <div class="mt-4 ">
                <input type="submit" value="Register" class="inline-block bg-blue-600 px-32 py-3 rounded-full font-bold text-white border-4 md:hover:bg-blue-500 tracking-wider cursor-pointer" />
               </div>

               	<div class="flex"> 
					<ul class="font-bold text-sm text-gray-700 tracking-wider"> 
						<li> Already have an account? <span class="hover:text-blue-400"> <nuxt-link to="/login">Login</nuxt-link> </span></li>
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
                title: 'Register',
            }
        },
        data() {
            return {
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                password: '',
                notification: {
                    message: '',
                    type: '',
                }
            }
        },
        methods: {
           async register() {
                await this.$axios.post('/signup', {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    username: this.username,
                    email: this.email,
                    password: this.password,
                })
                await this.$auth.loginWith('local', {
                    data: {
                        email: this.email,
                        password: this.password,
                    },
                })
                    this.$router.push('/dashboard')
                // .then(response => {
                //     //save token in local storage
                //     localStorage.setItem('tweetr-token', response.data.data.token)

                //     //redirects to user dashboard
                //     this.$router.push('/dashboard');
                // })
                .catch(error => {
                    // display error notification 
                    // this.$router.push('/register');
				this.notification = Object.assign({}, this.notification, {
					message: error.response.data.message,
					type: error.response.data.status,
                })
                this.first_name = '';
                this.last_name = '';
                this.username = '';
                this.email = '';
                this.password = '';
            })
        }
          
     },
        
    }
</script>

<style scoped>
</style>