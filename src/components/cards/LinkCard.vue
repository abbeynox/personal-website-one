<template>
    <div class="w-full p-1 px-0 mx-6">
        <a :href="url" target="_blank">
            <div class="flex items-center px-3 py-4 border rounded-lg hover:shadow-lg hover:border-red-600 hover:text-red-600">
                <div class="flex-grow">
                    <div class="items-center">
                        <i :class="icon" class="float-left mr-2 text-2xl"></i>
                        <h2 class="text-lg font-medium text-center title-font md:text-center">{{ name }}</h2>
                    </div>
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
        }
    },
}
</script>

<style scoped>
.hover\:bg-gradient-transition {
    background-image: linear-gradient(to right, #ff6b6b, #b60000);
    transition: background-position 1s ease-out;
}

.hover\:bg-gradient-transition:hover {
    background-position: right center;
}

.hover\:text-transition {
    transition: color 1s ease-out;
}

.hover\:text-transition:hover {
    color: #000000;
}
</style>
