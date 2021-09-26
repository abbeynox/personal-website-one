<template>
    <div>
        <div v-for="project in projects" v-bind:key="project.id">
            <div class="flex flex-wrap -m-4 mb-12 text-center">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-purple-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-white">{{ project.name }}</h2>
                <p class="leading-relaxed">{{ project.description }}</p>
                </div>
            </div> 
            </div>  
        </div>
    </div>
</template>

<script>

export default {
    name: 'ProjectCard',
        data: function () {
            return {
                projects: [
                    {
                        id: 1,
                        name: 'yao.dev',
                        description: 'Auch diese Website gehört zu meinen Projekten. Hier tobe ich mich frei aus und teste neue Web Frameworks.',
                        url: 'https://yaokaiser.ch/',
                        icon: 'fas fa-pen-fancy',
                    },
                    {
                        id: 2,
                        name: 'Sakumo',
                        description: 'Ein Discord Administrations- und Nützlichkeits-Bot',
                        url: 'https://sakumo.ywk.ch',
                        icon: 'fab fa-discord',
                    },
                ]
            }
        },

}
</script>

<script>

</script>