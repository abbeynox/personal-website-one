<template>

<div class="bottom-0 pt-2 md:mt-52">
    <div class="flex flex-col max-w-6xl px-3 pt-5 pb-5 m-auto text-sm text-gray-500 border-t border-gray-700 md:flex-row">
        <div class="mt-2">© 2023 Abbey Nox. All rights reserved.</div>
            <div class="flex flex-row mt-2 md:flex-auto md:flex-row-reverse">
                <div v-for="social in socials" :key="social.id">
                    <a :href="social.url" class="w-1 mx-1 md:mx-2">
                        <SoMediaIcon
                        :tooltip="social.tooltip"
                        :icon="social.icon"
                        :url="social.url"
                        ></SoMediaIcon>
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>
    

<script>
import SoMediaIcon from "./lib/SoMediaIcon.vue";
import socials from "../data/socials.js";

export default {
    name: 'Footer',
    data: function() {
    return {
      socials: socials,
    };
    },
    components: {
        SoMediaIcon,
    },
}
</script>