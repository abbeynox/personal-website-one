<template>
    <a :href="url" target="_blank">
        <span class="text-3xl SoMediaIcon" v-bind:class="[icon]"></span>
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