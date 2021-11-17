<template>
    <div class="px-2 py-6 my-2 overflow-hidden text-center border border-gray-800 rounded-lg hover:bg-indigo-500 hover:bg-opacity-10 hover:shadow-lg hover:border-indigo-500"> <!-- flex entfernen damit zentriert -->
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
