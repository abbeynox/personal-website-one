<template>
    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col w-full mb-20 text-center">
            <h1 class="mb-4 text-6xl font-bold text-white sm:text-6xl title-font">{{ title }}</h1>
            <p class="mx-auto mt-2 text-base text-lg leading-relaxed text-gray-400 lg:w-2/3">{{ description }}</p>
        </div>   
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: "Page Title"
        },
        description: {
            type: String,
            required: true,
            default: "Page Description"
        }
    }
};

</script>
