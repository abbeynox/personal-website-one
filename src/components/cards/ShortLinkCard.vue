<template>

    <a :href="url" target="_blank" class="flex items-center justify-between w-full p-2 py-3 transition duration-500 border-2 border-gray-800 rounded-lg md:px-6 md:rounded-full hover:bg-indigo-500 hover:bg-opacity-10 hover:shadow-lg hover:border-indigo-500">

        <div class="items-center lg:flex md:flex">

        <div class="flex flex-col py-3 pl-12">

            <div class="w-full mb-3 text-2xl font-bold leading-3 text-white">{{ name }}</div>

            <div class="w-full text-lg text-gray-400">{{ description }}</div>
        
        </div>

        </div>

        <svg class="invisible w-6 h-6 mr-1 md:visible lg:visible xl:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        
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