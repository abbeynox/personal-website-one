<template>
    <span class="text-sm LinkIcon" v-bind:class="[{ 'ml-1' : margin }, name]"></span>
</template>

<script>
export default {
    name: "LinkIcon",
    props: {
        name: String,
        margin: {
            default: true,
            type: Boolean,
        }
    },
}
</script>