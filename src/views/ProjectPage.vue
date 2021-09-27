<template>
    <section class="text-gray-400 bg-black body-font">
        <Header title="Projekte" description="Eine Liste von Projekten, an denen ich zurzeit arbeite oder abgeschlossen habe."></Header>
        <div>
            <div v-for="project in projects" v-bind:key="project.id"> <!-- Rendert die Projects Liste basierend auf einen Array -->
                <div class="flex flex-wrap mb-12 -m-4 text-center">
                    <div class="w-full mx-auto text-center xl:w-1/2 lg:w-3/4">
                        <a :href="project.url" target="_blank">
                            <div class="px-4 py-6 border-2 border-gray-800 rounded-lg">
                            
                            <div class="border-solid md:border-dotted ...">{{ project.status }}</div>

                            <div class="text-2xl font-bold"><BaseIcon :name="project.icon" />{{ project.name }}</div> 
                            <p class="leading-relaxed">{{ project.description }}</p>
                            </div>
                        </a>
                    </div> 
                </div>
            </div>
        </div>
    </section>


</template>


<script type="text/javascript">
import Header from '../components/Header';
import BaseIcon from '@/components/BaseIcon';
import uniqueId from 'lodash.uniqueid';


    export default {
        name: 'Project',
        title: 'Projekte',
        components: {
                Header,
                BaseIcon
            },
        data: function () { // Projekte Liste
            return {
                projects: [
                    {
                        id: uniqueId('project-'),
                        name: 'yao.dev',
                        description: 'Auch diese Website gehört zu meinen Projekten. Geschrieben wurde sie mit Vue.js und Tailwind CSS.',
                        url: 'https://yaokaiser.ch/',
                        icon: 'fas fa-pen-fancy',
                    },
                    {
                        id: uniqueId('project-'),
                        name: 'SakumoBot',
                        description: 'Ein Discord Administrations- und Nützlichkeits-Bot.',
                        url: 'https://sakumo.ywk.ch',
                        icon: 'fab fa-discord',
                    },
                    {
                        id: uniqueId('project-'),
                        name: 'Rlnk.be',
                        description: 'Eine URL Shortener Website, geschrieben mit Node.js.',
                        url: 'https://rlnk.be',
                        icon: 'fas fa-link'
                    },
                    {
                        id: uniqueId('project-'),
                        name: 'IntraGalaxia',
                        description: 'Starte deine Rakete und schütze die Erde vor Meteoridenschwärme. Ein Spiel für iOS und Android.',
                        url: 'https://intragalaxia.com',
                        icon: 'fas fa-rocket'
                    },
                    {
                        id: uniqueId('project'),
                        name: 'Schoolingo',
                        description: 'Eine Verwaltungssoftware für Schüler und Studenten. Dieses Projekt ist aktuell erst in der Planungsphase.',
                        icon: 'fas fa-graduation-cap',
                        status: 'in Planung'
                    }
                ]
            }
        },
        }

</script>

<style scoped>

</style>