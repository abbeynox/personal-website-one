<template>
    <section class="text-gray-400 bg-black body-font">
        <div class="container px-5 py-24 mx-auto">
            <ProjectHeader />
            <div>
                <div v-for="project in projects" v-bind:key="project.id"> <!-- Rendert die Projects Liste basierend auf einen Array -->
                    <div class="flex flex-wrap -m-4 mb-12 text-center">
                        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <a :href="project.url" target="_blank">
                                <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                                    
                                <div class="font-bold text-2xl"><BaseIcon :name="project.icon" />{{ project.name }}</div>
                                <p class="leading-relaxed">{{ project.description }}</p>
                                </div>
                            </a>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>


<script type="text/javascript">
import ProjectHeader from '../components/projects/ProjectHeader';
import BaseIcon from '@/components/BaseIcon';


    export default {
        name: 'Project',
        title: 'Projekte',
        components: {
                ProjectHeader,
                BaseIcon
            },
        data: function () { // Projekte Liste
            return {
                projects: [
                    {
                        id: 1,
                        name: 'yao.dev',
                        description: 'Auch diese Website gehört zu meinen Projekten. Geschrieben wurde sie mit Vue.js und Tailwind CSS.',
                        url: 'https://yaokaiser.ch/',
                        icon: 'fas fa-pen-fancy',
                    },
                    {
                        id: 2,
                        name: 'SakumoBot',
                        description: 'Ein Discord Administrations- und Nützlichkeits-Bot.',
                        url: 'https://sakumo.ywk.ch',
                        icon: 'fab fa-discord',
                    },
                    {
                        id: 3,
                        name: 'Rlnk.be',
                        description: 'Eine URL Shortener Website, geschrieben mit Node.js.',
                        url: 'https://rlnk.be',
                        icon: 'fas fa-link'
                    }
                ]
            }
        },
        }

</script>

<style scoped>

</style>