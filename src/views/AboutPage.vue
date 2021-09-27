<template>
    <div>
        <Header title="Über mich" description="Ich stelle mich vor..."></Header>
        <Vorstellung />
        <Skills />
        
    </div>
</template>

<script>
import Header from "../components/Header"
import Vorstellung from "../components/about/Vorstellung"
import Skills from "../components/about/Skills"
export default {
    name: 'About',
    title: 'Über mich',
    components: {
        Header,
        Vorstellung,
        Skills
    }
}
</script>

<style scoped>
</style>