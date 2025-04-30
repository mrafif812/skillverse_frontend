<template>
    <section class="flex justify-center container my-12 pt-12 mx-auto w-2/3">
        <div class="flex justify-center basis-1/2">
            <img src="/images/project_images/login_security.gif" class="w-[380px] h-[380px]" alt="">
        </div>
        <div class="basis-1/2 mx-auto text-[#676C7D] ">
            <h3 class="text-[34px] font-[700] mb-[16px]">Sign up</h3>
            <p class="mb-[51px] [word-spacing:0.5rem] font-[400] text-[15px]">Explore, learn, and grow with us. enjoy a seamless and enriching educational journey. lets begin!</p>
            <form>
                <div class="mb-6">
                    <h5 class="text-[16px] font-[500] mb-[20px]">First name</h5>
                    <div class="relative">
                        <i class="fa-solid fa-user absolute left-[18px] top-[34%]"></i>
                        <input type="text" placeholder="Enter your first name" class="w-[100%] pt-[14px] pb-[13px] pl-[48px] rounded-[11px] text-[14px] font-[400] text-[#6e798a] border-none bg-[#6e798a1c]">
                    </div>
                </div>
                <div class="mb-6">
                    <h5 class="text-[16px] font-[500] mb-[20px]">Last name</h5>
                    <div class="relative">
                        <i class="fa-solid fa-user absolute left-[18px] top-[34%]"></i>
                        <input type="text" placeholder="Enter your last name" class="w-[100%] pt-[14px] pb-[13px] pl-[48px] rounded-[11px] text-[14px] font-[400] text-[#6e798a] border-none bg-[#6e798a1c]">
                    </div>
                </div>
                <div class="mb-6">
                    <h5 class="text-[16px] font-[500] mb-[20px]">Your email</h5>
                    <div class="relative">
                        <i class="fa-solid fa-user absolute left-[18px] top-[34%]"></i>
                        <input type="email" placeholder="Enter your email" class="w-[100%] pt-[14px] pb-[13px] pl-[48px] rounded-[11px] text-[14px] font-[400] text-[#6e798a] border-none bg-[#6e798a1c]">
                    </div>
                </div>
                <div class="mb-6">
                    <h5 class="text-[16px] font-[500] mb-[20px]">Password</h5>
                    <div class="relative">
                        <i class="fa-solid fa-key absolute left-[18px] top-[34%]"></i>
                        <input type="password" placeholder="Enter your valid password" class="w-[100%] pt-[14px] pb-[13px] pl-[48px] rounded-[11px] text-[14px] font-[400] text-[#6e798a] border-none bg-[#6e798a1c]">
                        <i class="fa-solid fas cursor-pointer fa-eye-slash absolute right-[20px] top-[34%] left-[unset]"></i>
                    </div>
                </div>
                <div class="mb-6 flex items-center">
                    <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                    <label for="" class="ml-3 text-[16px] font-[500]">Apply to become an instructor</label>
                </div>
                <div class="mb-6">
                    <h5 class="text-[16px] font-[500] mb-[20px]">Phone</h5>
                    <div class="relative">
                        <i class="fa-solid fa-phone absolute left-[18px] top-[34%]"></i>
                        <input type="tel" placeholder="Enter your phone number" class="w-[100%] pt-[14px] pb-[13px] pl-[48px] rounded-[11px] text-[14px] font-[400] text-[#6e798a] border-none bg-[#6e798a1c]">
                    </div>
                </div>
                <div class="mb-6">
                    <h5 class="text-[16px] font-[500] mb-[20px]">Document (doc, docs, pdf, txt, png, jpg, jpeg)</h5>
                    <div class="relative">
                        <input type="file" placeholder="Enter your phone number" class="w-[100%] pt-[14px] pb-[13px] pl-[48px] rounded-[11px] text-[14px] font-[400] text-[#6e798a] border-none bg-[#6e798a1c] file:px-4 file:py-1 file:border-0 file:border-r-[1px] file:mr-[20px] file:bg-slate-200  file:text-black hover:file:bg-blue-100">
                        <small>Provide some documents about your qualifications</small>
                    </div>
                </div>
                <div class="mb-6">
                    <h5 class="text-[16px] font-[500] mb-[20px]">Message</h5>
                    <div class="relative">
                        <textarea class="w-[100%] pt-[14px] pb-[13px] pl-[48px] rounded-[11px] text-[14px] font-[400] text-[#6e798a] border-none bg-[#6e798a1c]"></textarea>
                    </div>
                </div>
                <div class="mb-[30px]">
                    <button class="border-[1.5px] border-[#6e798a45] w-[100%] mt-[30px] bg-[#754FFE] py-[12px] px-[30px] text-white rounded-xl">Sign up</button>
                </div>
            </form>
            <div>
                <h5 
                class="relative text-center before:content-[''] before:absolute before:w-[45%] before:h-[1.5px] before:bg-[#6e798a72] before:top-[50%] before:right-0 text-[16px] font-[500]
                after:content-[''] after:absolute after:w-[45%] after:h-[1.5px] after:bg-[#6e798a72] after:top-[50%] after:left-0 mb-[30px]">Or</h5>
                <p class="text-center [letter-spacing:1.5px] [word-spacing:1.5px] font-[400] text-[15px] mb-[30px]">
                    Already you have an account? 
                    <router-link to="" class="ml-[10px] text-[blue]">Login</router-link>
                </p>
            </div>
        </div>
    </section>
</template>

<script>

</script>