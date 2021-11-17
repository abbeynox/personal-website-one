<template>
    <div class="container px-5 pt-24 pb-1 m-4 mx-auto">
        <div class="flex flex-col w-full mb-2 text-left">
            <h1 :class="'mb-3 font-semibold tracking-wide uppercase sm:text-lg sm:leading-snug ' + titleColor">{{ title }}</h1>
            <p class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white text-primary sm:text-5xl lg:text-5xl">{{ description }}</p>
            <p v-show="text != null" class="mb-6 text-lg text-gray-400">{{ text }}</p>
        </div>   
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: "Title"
        },
        titleColor: {
            type: String,
            required: true,
            default: "text-purple-500"
        },
        description: {
            type: String,
            required: true,
            default: "Description"
        },
        text: {
            type: String,
            required: false,
        }
    }
};

</script>
