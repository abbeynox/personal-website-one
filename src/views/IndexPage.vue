<template>
    <div>
        <IndexHero></IndexHero>
        <SocialMedia></SocialMedia>
        <Skills></Skills>
    </div>
</template>


<script type="text/javascript">

    import IndexHero from '../components/IndexHero';
    import SocialMedia from '../components/SocialMedia';
    import Skills from '../components/Skills';
    

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