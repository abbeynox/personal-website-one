<template>
    <div class="container px-5 pt-24 pb-1 m-4 mx-auto">
        <div class="flex flex-col w-full mb-20 text-left">
            <h1 class="mb-3 font-semibold tracking-wide text-purple-500 uppercase sm:text-lg sm:leading-snug">{{ title }}</h1>
            <p class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-primary sm:text-5xl lg:text-5xl">{{ description }}</p>
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
