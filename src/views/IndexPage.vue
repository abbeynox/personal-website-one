<template>
    <div>
        <IndexHero></IndexHero>
        <Features></Features>
        <SocialMedia></SocialMedia>
    </div>
</template>


<script type="text/javascript">

    import IndexHero from '../components/index/IndexHero';
    import Features from '../components/index/Features';
    import SocialMedia from '../components/index/SocialMedia';

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