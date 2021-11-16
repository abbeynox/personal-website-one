<template>
    <section class="text-gray-400 bg-black body-font">
        <Header title="Projekte" description="Einige Projekte, die ich gemacht habe." text="Hier sind einige meiner Coding-Projekte zu sehen. Betriebsinterne Projekte sind hier nicht aufgelistet. Zurzeit arbeite ich mit Herzblut an einer sogenannten ShortCut Practicer Website, die mit TypeScript und React geschrieben wird. Auf GitHub sind einige weitere Projekte zu finden."></Header>
        <div>
            <div v-for="project in projects" v-bind:key="project.id"> <!-- Rendert die Projects Liste basierend auf einen Array -->
                <ProjectCard :name="project.name" :url="project.url" :description="project.description" :icon="project.icon" :status="project.status"></ProjectCard>
            </div>
        </div>
    </section>


</template>


<script type="text/javascript">
import Header from '../components/Header';
import ProjectCard from '@/components/cards/ProjectCard';
import projects from '../data/projects.js'

    export default {
        name: 'Project',
        title: 'Projekte',
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