<template>
    <div>
        <IndexHero></IndexHero>
        <SocialMedia></SocialMedia>
        <Features></Features>
    </div>
</template>


<script type="text/javascript">

    import IndexHero from '../components/IndexHero';
    import SocialMedia from '../components/SocialMedia';
    import Features from '../components/Features';
    

    export default {
        name: 'Home',
        title: 'Home',
        components: {
            IndexHero,
            Features,
            SocialMedia
            }
        }
</script>

<style scoped>

</style>