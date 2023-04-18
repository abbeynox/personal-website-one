<template>
    <a :href="url" target="_blank" class="hover:text-gray-400">
        <span class="text-xl SoMediaIcon" v-bind:class="[icon]"></span>
    </a>
</template>

<script>
export default {
    name: "SoMediaIcon",
    props: {
        icon: String,
        name: String,
        url: String
    },
}
</script>