<template>
    <div class="px-2 pt-6 pb-2 my-2 overflow-hidden text-center border border-gray-800 rounded-lg hover:bg-indigo-500 hover:bg-opacity-10 hover:shadow-lg hover:border-indigo-500"> <!-- flex entfernen damit zentriert -->
        <h2 class="font-medium text-white title-font"><i :class="icon"></i>  {{ name }} </h2>
        <div class="flex h-2 mt-4 overflow-hidden text-xs bg-purple-200 rounded">
          <div :style="'width:'+rate * 10+'%'" class="flex flex-col justify-center text-center text-white bg-purple-500 shadow-none whitespace-nowrap"></div>
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
        },
        rate: {
            type: Number,
            required: false,
        }
    }
};
</script>
