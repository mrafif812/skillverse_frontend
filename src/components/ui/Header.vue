<template>
    <section id="advertisement" class="border-b-[1px] border-[#1e293b2a] p-2">
        <div class="flex justify-between container mx-auto w-2/3">
            <div class="flex">
                <router-link to="" class="flex p-2 items-center">
                    <i class="fas fa-phone text-blue-600 text-lg"></i>
                    <span class="mx-2  text-sm">+143-52-9933631</span>
                </router-link>
                <router-link to="" class="flex p-2 items-center">
                    <i class="fas fa-envelope text-blue-600 text-lg"></i>
                    <span class="mx-2 text-sm">academy@example.com</span>
                </router-link>
            </div>
            <div class="flex">
                <div class="flex justify-between items-center mr-16">
                    <a href="#" class="p-2 mx-2"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="p-2"><i class="fa-brands fa-twitter"></i></a>
                </div>
                <div class="relative flex justify-between items-center w-[90px]">
                    <select class="appearance-none w-full rounded-md border border-gray-300 bg-white py-1 pl-3 pr-8 text-xs text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-300">
                        <option value="english">English</option>
                    </select>
                </div>
            </div>
        </div>
    </section>
    <section id="header" class="p-2">
        <div class="flex justify-between container mx-auto w-2/3">
            <div class="flex items-center">
                <router-link to="" class="flex p-2 items-center">
                    <img src="/images/logos/logo-dark.png" class="h-[36px] object-cover" alt="">
                </router-link>
                <nav class="flex items-center ml-3">
                    <div class="group relative">
                        <router-link class="bg-[#754ffe3a] px-4 py-3 text-[#754FFE] rounded-lg flex items-center text-sm leading-none" to=""> 
                            <i class="fa-solid fa-bars"></i> 
                            <span class="px-2">Courses</span> 
                        </router-link>
                        <div class="hidden group-hover:block absolute">
                            <ul class="w-max bg-[#F8F7FF] py-4 rounded-lg mt-2">
                                <li>
                                    <router-link to="" class="flex items-center px-5 text-sm leading-none"> 
                                        <div class="mr-[160px]">
                                            <i class="fa-solid fa-bars-staggered"></i>
                                            <span class="pl-4">All Courses</span>
                                        </div>
                                        <i class="fa-solid fa-angle-right"></i> 
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="ml-6">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <div class="flex">
                <div class="flex justify-between items-center mr-16">
                    <nav class="flex items-center ml-3">
                        <div class="group relative">
                            <router-link class="flex items-center text-sm leading-none" to=""> 
                                <i class="fa-solid fa-cart-shopping text-[22px]"></i>
                            </router-link>
                            <div class="hidden group-hover:block absolute right-0">
                                <div class="w-max bg-[#F8F7FF] py-[20px] px-[12px] rounded-lg mt-2">
                                    <div class="flex items-center w-[276px]">
                                        <div class="relative basis-1/4">
                                            <img src="\images\project_images\demo.jpg" class="w-[69px] h-[69px] rounded-[10px]" alt="">
                                            <span class="absolute top-0 right-1 text-red-600"><i class="fa-solid fa-minus"></i></span>
                                        </div>
                                        <div class="ml-3 basis-3/4">
                                            <router-link to="">
                                                <div class="text-[13px] font-[500px]">Node Js</div>
                                                <div class="text-[12px] font-[400px] mt-1 mb-2"><span>By</span> cool ninja</div>
                                                <div class="text-[14px] font-[600px]">$5 <span class="line-through text-[10px] font-[500px]">$25</span></div>
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="flex justify-center items-center mt-[20px] mx-[20px]">
                                        <router-link to="" class="w-[100%] bg-[#754ffe] text-white py-[13px] px-[15px] rounded-lg text-[14px] font-[600] text-center">Checkout</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex item-center ml-[25px]">
                            <router-link :to="{name: 'login'}" class="font-[600] text-[14px] text-[#1E293B] mx-4">Login</router-link>
                            <router-link :to="{name: 'register'}" class="font-[600] text-[14px] text-[#1E293B] mx-4">Join Now</router-link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>