<template>
    <section class="text-gray-400 bg-black body-font">
        <Header title="Projects" description="Some projects I've done." text="Here you can see some of my coding projects. Internal projects are not listed here. Currently I'm not working on any major projects privately. On GitHub you can find some more projects."></Header>
        <div>
            <div v-for="project in projects" v-bind:key="project.id"> <!-- Rendert die Projects Liste basierend auf einen Array -->
                <ProjectCard :name="project.name" :url="project.url" :description="project.description" :icon="project.icon" :status="project.status"></ProjectCard>
            </div>
        </div>
    </section>


</template>


<script type="text/javascript">
import Header from '../components/Header.vue';
import ProjectCard from '@/components/cards/ProjectCard';
import projects from '../data/projects.js'

    export default {
        name: 'Project',
        title: 'Projects',
        components: {
                Header,
                ProjectCard
            },
        data: function () { // Projekte Liste
            return {
                projects: projects
            };
        },
        }

</script>

<style scoped>

</style>