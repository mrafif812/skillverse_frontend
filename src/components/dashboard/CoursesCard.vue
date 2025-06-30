<template>
    <div class="max-w-72 h-96 shadow-lg rounded-xl bg-white border-[#f3f1f8] border-[1px] mb-5">
        <a href="#" class="card">
            <div class="relative h-1/2">
                <img :src="image" class="w-full h-full object-cover rounded-t-xl" alt="">
                <button @click.stop.prevent="toggleFavorite" class="absolute top-4 right-4 z-10 rounded-full bg-white px-2 py-1">
                    <i :class="isFavorite ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart'"></i>
                </button>
                <span class="absolute left-4 top-5 text-xs bg-white rounded-xl px-2 py-1">{{ level }}</span>
            </div>
            <div class="p-4">
                <h5 class="text-[#1E293B] text-base font-semibold mb-2 truncate">{{course_name}}</h5>
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center justify-around text-sm font-thin text-[#6e798a]">
                        <span>{{ rating }}</span>
                        <div class="mx-2">
                            <i class="fa-regular fa-star text-[#dedfe0]"></i>
                        </div>
                        <span>({{ number_of_reviews }} reviews)</span>
                    </div>
                    <button class="flex items-center justify-between rounded-md bg-[#754ffe] py-1 px-2">
                        <div class="text-[10px] text-white mt-1">
                            <i class="fa-solid fa-code-compare"></i>
                        </div>
                        <span class="text-xs text-white ml-1">compare</span>
                    </button>
                </div>
                <div class="mb-5">
                    <p class="line-clamp-2 text-[#6e798a] text-xs">{{ description }}</p>
                </div>
                <div class="flex justify-between items-center border-t border-[#676c7d3a] pt-3">
                    <div class="flex items-center">
                        <h5 class="text-base font-semibold text-[#1E293B] pr-2">${{price}}</h5>
                        <p class="text-[#6e798a] text-xs"><s>${{discount}}</s></p>
                    </div>
                    <p class="text-xs">
                        <i class="fa-regular fa-clock text-[#754ffe] mr-1"></i>
                        <span class="text-[#6e798a]">{{ total_time }} Hours</span>
                    </p>
                </div>
            </div>
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps([
    'image',
    'is_favorite',
    'level',
    'course_name',
    'rating',
    'number_of_reviews',
    'price',
    'discount',
    'total_time',
    'description',
]);
const isFavorite = ref(false)

function toggleFavorite() {
  isFavorite.value = !isFavorite.value
}

</script>