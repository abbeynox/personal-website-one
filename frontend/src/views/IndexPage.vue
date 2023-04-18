<template>
    <div>
        <IndexHero></IndexHero>
        <SocialMedia></SocialMedia>
        <Skills></Skills>
    </div>
</template>


<script type="text/javascript">

    import IndexHero from '../components/IndexHero.vue';
    import SocialMedia from '../components/SocialMedia.vue';
    import Skills from '../components/Skills.vue';
    

    export default {
        name: 'Home',
        title: 'Home',
        components: {
            IndexHero,
            Skills,
            SocialMedia
            }
        }
</script>

<style scoped>

</style>