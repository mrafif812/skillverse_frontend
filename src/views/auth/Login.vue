<template>
    <section class="flex justify-center container my-12 pt-12 mx-auto w-2/3">
        <div class="flex justify-center basis-1/2">
            <img src="/images/project_images/login_security.gif" class="w-[380px] h-[380px]" alt="">
        </div>
        <div class="basis-1/2 mx-auto text-[#676C7D] ">
            <h3 class="text-[34px] font-[700] mb-[16px]">Login</h3>
            <p class="mb-[51px] [word-spacing:0.5rem] font-[400] text-[15px]">Explore, learn, and grow with us. enjoy a seamless and enriching educational journey. lets begin!</p>
            <form @submit.prevent="handleLogin">
                <div class="mb-6">
                    <h5 class="text-[16px] font-[500] mb-[20px]">Your email</h5>
                    <div class="relative">
                        <i class="fa-solid fa-user absolute left-[18px] top-[34%]"></i>
                        <input type="email" v-model="email" placeholder="Enter you email" class="w-[100%] pt-[14px] pb-[13px] pl-[48px] rounded-[11px] text-[14px] font-[400] text-[#6e798a] border-none bg-[#6e798a1c]">
                    </div>
                </div>
                <div class="mb-3">
                    <h5 class="text-[16px] font-[500] mb-[20px]">Password</h5>
                    <div class="relative">
                        <i class="fa-solid fa-key absolute left-[18px] top-[34%]"></i>
                        <input type="password" v-model="password" placeholder="Enter your valid password" class="w-[100%] pt-[14px] pb-[13px] pl-[48px] rounded-[11px] text-[14px] font-[400] text-[#6e798a] border-none bg-[#6e798a1c]">
                        <i class="fa-solid fas cursor-pointer fa-eye-slash absolute right-[20px] top-[34%] left-[unset]"></i>
                    </div>
                    <div class="flex justify-end">
                        <router-link to="" class="text-[0.875rem] text-[#212529]">Forgot password?</router-link>
                    </div>
                </div>
                <div class="mb-[30px]">
                    <button class="border-[1.5px] border-[#6e798a45] w-[100%] mt-[30px] bg-[#754FFE] py-[12px] px-[30px] text-white rounded-xl">Login</button>
                </div>
            </form>
            <div>
                <h5 
                class="relative text-center before:content-[''] before:absolute before:w-[45%] before:h-[1.5px] before:bg-[#6e798a72] before:top-[50%] before:right-0 text-[16px] font-[500]
                after:content-[''] after:absolute after:w-[45%] after:h-[1.5px] after:bg-[#6e798a72] after:top-[50%] after:left-0 mb-[30px]">Or</h5>
                <p class="text-center [letter-spacing:1.5px] [word-spacing:1.5px] font-[400] text-[15px] mb-[30px]">
                    Don`t have an account? 
                    <router-link to="" class="ml-[10px] text-[blue]">Sign up</router-link>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter  } from 'vue-router';
    import useAuthStore from '../../stores/auth';

    const email = ref('') 
    const password = ref('') 
    const auth = useAuthStore(); 
    const router = useRouter();
    
    const handleLogin = async () => {
        try {
            await auth.login({ email: email.value, password: password.value });
            router.push('/dashboard');
        } catch (e) {
            console.log(e);
        }
    };  
</script>