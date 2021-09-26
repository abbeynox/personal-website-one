<template>
    <div>
        <AboutHeader />
        <Vorstellung />
        <Skills />
        
    </div>
</template>

<script>
import AboutHeader from "../components/about/AboutHeader"
import Vorstellung from "../components/about/Vorstellung"
import Skills from "../components/about/Skills"
export default {
    name: 'About',
    title: 'Über mich',
    components: {
        AboutHeader,
        Vorstellung,
        Skills
    }
}
</script>

<style scoped>
</style>