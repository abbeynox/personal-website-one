<template>
    <div>
        <Header title="About me" description="Introducing myself."></Header>
        <Vorstellung />
        <Skills id="skills" />
        <Tunes id="tunes" />
        
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import Vorstellung from "../components/Vorstellung.vue"
import Skills from "../components/Skills.vue"
import Tunes from "../components/Tunes.vue"
export default {
    name: 'About',
    title: 'About me',
    components: {
        Header,
        Vorstellung,
        Skills,
        Tunes
    }
}
</script>

<style scoped>
</style>