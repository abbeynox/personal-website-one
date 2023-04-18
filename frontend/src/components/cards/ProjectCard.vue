<template>
  <div class="flex flex-wrap m-4 mb-12 text-center">
    <div class="w-full mx-auto text-center">
      <a :href="url" target="_blank">
        <div class="px-4 py-6 border-2 border-gray-800 rounded-lg group hover:bg-indigo-500 hover:bg-opacity-10 hover:shadow-lg hover:border-indigo-500">
          <div class="border-solid md:border-dotted ...">
            <span v-show="status !== 'N/A'" class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">{{ status }}</span>
          </div>
          <div class="text-2xl font-bold text-white">
            <BaseIcon :name="icon" />{{ name }} <LinkIcon class="hover:text-indigo-500" v-show="url !== undefined" name="fas fa-external-link-alt" />
          </div>  
          <p class="leading-relaxed">{{ description }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import BaseIcon from '../lib/BaseIcon.vue';
import LinkIcon from '../lib/LinkIcon.vue';
export default {
    props: {
        name: {
            type: String,
            required: true,
            default: "N/A"
        },
        description: {
            type: String,
            required: true,
            default: "N/A"
        },
        icon: {
            type: String,
            required: true,
            default: "fas fa-pen-fancy"
        },
        url: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: true,
            default: "N/A"
        }
    },
    components: {
        BaseIcon,
        LinkIcon
    }
}
</script>
