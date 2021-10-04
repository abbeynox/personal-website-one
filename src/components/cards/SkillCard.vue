<template>
    <div class="w-full p-2 px-2 my-2 overflow-hidden border border-gray-800 rounded-lg sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3 hover:bg-indigo-500 hover:bg-opacity-10 hover:shadow-lg hover:border-indigo-500"> <!-- flex entfernen damit zentriert -->
        <h2 class="font-medium text-white title-font"><i :class="icon"></i>  {{ name }} </h2>
    </div>
</template> 

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true,
            default: "fas fa-code"
        }
    },
};
</script>
