<template>
    <div>
        <Header title="About me" description="Introducing myself."></Header>
        <Vorstellung />
        <Skills id="skills" />
        <Tunes id="tunes" />
        
    </div>
</template>

<script>
import Header from "../components/Header"
import Vorstellung from "../components/Vorstellung"
import Skills from "../components/Skills"
import Tunes from "../components/Tunes"
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