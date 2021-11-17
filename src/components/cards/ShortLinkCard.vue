<template>
    <a :href="url" class="flex flex-col p-8 mx-6 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="hidden w-16 h-16 p-3 text-blue-400 bg-gray-900 border border-gray-800 rounded-2xl md:visible" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div class="flex flex-col ml-3">
                    <div class="text-lg font-medium leading-none text-gray-100">{{ name }}</div>
                    <p class="mt-1 text-lg leading-none text-gray-400">{{ description }}</p>
                </div>
                
            </div>
            
            <a
            class="items-center justify-center hidden mt-3 text-purple-400 md:inline-flex md:visible"
            :href="url"
            >öffnen
            <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
            >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </a>        
        </div>
    </a>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true,
            default: "fas fa-link"
        },
        description: {
            type: String,
            required: false,
        },
        todayImportant: {
            type: Boolean,
            required: true,
            default: true
        }
    },
}
</script>