<template>
<div class="w-full p-2 lg:w-1/4 md:w-1/2">
    <div class="flex items-center h-full p-2 border border-gray-800 rounded-lg">     
        <div class="flex flex-col md:flex-col">
            <h2 class="font-medium text-white title-font"><i :class="icon"></i>  {{ name }}</h2>
        </div>
    </div>
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
    }
};
</script>
