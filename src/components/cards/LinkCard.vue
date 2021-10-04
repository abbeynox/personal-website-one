<template>
    <div class="w-full p-1 px-0 mx-6">
        <a :href="url" target="_blank">
            <div :class="'flex items-center px-3 py-4 border border-gray-800 rounded-lg bg-gradient-to-r from-' + fromColor + ' ' + viaColor + ' ' +' to-'+ toColor + ' hover:bg-indigo-500 hover:bg-opacity-10 hover:shadow-lg hover:border-indigo-500'">
                <div class="flex-grow ">
                    <h2 class="text-lg font-medium text-center text-white title-font md:text-center"><i :class="icon"></i> {{ name }}</h2>

                        <span class="BaseIcon" v-bind:class="[{ 'mr-2' : margin }, name]"></span>

                </div>
            </div>
        </a>
    </div>    
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
        fromColor: {
            type: String,
            required: true,
            default: "gray-500"
        },
        toColor: {
            type: String,
            required: true,
            default: "gray-700"
        },
        viaColor: {
            type: String,
            required: true,
            default: ""
        }
    }
}
</script>
