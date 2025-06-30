<template>
  <section class="bg-[#F8F7FF] sm:py-12 sm:mt-9">
    <div class="custom-container-no-flex">
        <div class="flex flex-col justify-center items-center">
          <h1 class="sm:text-3xl sm:font-bold sm:mb-7 text-[#1E293B]">Top courses</h1>
          <p class="sm:text-xs sm:mb-7 text-[#676C7D]">These are the most popular courses among listen courses
            learners worldwide</p>
        </div>
        <div class="mx-auto max-w-screen-xl px-4 relative box-border">
          <swiper 
            :modules="modules" 
            :slides-per-view="4" 
            :space-between="10" 
            :navigation="{
              nextEl: '.custom-next',
              prevEl: '.custom-prev'
            }" 
            :loop="true" 
            :scrollbar="{ draggable: true }" 
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="course in courses" :key="course">
              <courses-card :image="course.image" :is_favorite="course.is_favorite" :level="course.level"
                :course_name="course.course_name" :rating="course.rating" :number_of_reviews="course.number_of_reviews"
                :price="course.price" :discount="course.discount" :total_time="course.total_time"
                :description="course.description">
              </courses-card>
            </swiper-slide>
          </swiper>
          <div
            class="custom-prev absolute top-1/2 left-[-2rem] transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-700 shadow-md cursor-pointer z-10">
            <span class="text-xl"><i class="fa-solid fa-chevron-left"></i></span>
          </div>
          <div
            class="custom-next absolute top-1/2 right-[-2rem] transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-700 shadow-md cursor-pointer z-10">
            <span class="text-xl"><i class="fa-solid fa-chevron-right"></i></span>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { ref, onMounted } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
import CoursesCard from './CoursesCard.vue';

const modules = [Navigation, Scrollbar, A11y];

const swiperRef = ref(null);
const courses = ref([
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    is_favorite: true,
    level: 'Beginner',
    course_name: 'Intro to Web Development',
    rating: 4.5,
    number_of_reviews: 1200,
    price: 49.99,
    discount: 110,
    total_time: '04:00:00',
    description: 'Node.js is a JavaScript runtime built on V8 engine that allows developers to run JavaScript code outside the browser. It uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient. Node.js is commonly used to build scalable network applications, backend APIs, real-time services like chat apps, and more. It comes with a built-in package manager called npm (Node Package Manager), which provides access to thousands of open-source libraries. Developers often choose Node.js for its speed, scalability, and the ability to use the same language (JavaScript) on both the frontend and backend of web applications.'
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    is_favorite: false,
    level: 'Intermediate',
    course_name: 'Vue.js Complete Guide',
    rating: 4.7,
    number_of_reviews: 850,
    price: 59.99,
    discount: 150,
    total_time: '07:00:00',
    description: 'Node.js is a JavaScript runtime built on V8 engine that allows developers to run JavaScript code outside the browser. It uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient. Node.js is commonly used to build scalable network applications, backend APIs, real-time services like chat apps, and more. It comes with a built-in package manager called npm (Node Package Manager), which provides access to thousands of open-source libraries.'
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    is_favorite: true,
    level: 'Expert',
    course_name: 'Advanced JavaScript Techniques',
    rating: 4.9,
    number_of_reviews: 2100,
    price: 89.99,
    discount: 100,
    total_time: '14:00:00',
    description: 'It uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient. Node.js is commonly used to build scalable network applications, backend APIs, real-time services like chat apps, and more. It comes with a built-in package manager called npm (Node Package Manager), which provides access to thousands of open-source libraries. Developers often choose Node.js for its speed, scalability, and the ability to use the same language (JavaScript) on both the frontend and backend of web applications.'
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    is_favorite: true,
    level: 'Expert',
    course_name: 'Advanced JavaScript Techniques',
    rating: 4.9,
    number_of_reviews: 2100,
    price: 89.99,
    discount: 100,
    total_time: '14:00:00',
    description: 'It uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient. Node.js is commonly used to build scalable network applications, backend APIs, real-time services like chat apps, and more. It comes with a built-in package manager called npm (Node Package Manager), which provides access to thousands of open-source libraries. Developers often choose Node.js for its speed, scalability, and the ability to use the same language (JavaScript) on both the frontend and backend of web applications.'
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    is_favorite: true,
    level: 'Expert',
    course_name: 'Advanced JavaScript Techniques',
    rating: 4.9,
    number_of_reviews: 2100,
    price: 89.99,
    discount: 100,
    total_time: '14:00:00',
    description: 'It uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient. Node.js is commonly used to build scalable network applications, backend APIs, real-time services like chat apps, and more. It comes with a built-in package manager called npm (Node Package Manager), which provides access to thousands of open-source libraries. Developers often choose Node.js for its speed, scalability, and the ability to use the same language (JavaScript) on both the frontend and backend of web applications.'
  },
]);


const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const onSlideChange = () => {
  console.log('slide change');
};

onMounted(() => {
  if (swiperRef.value) {
    swiperRef.value.navigation.init();
    swiperRef.value.navigation.update();
  }
});
</script>
