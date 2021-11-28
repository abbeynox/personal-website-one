<template>
    <div>
        <IndexHero></IndexHero>
        <SocialMedia></SocialMedia>
        <QuickLinks></QuickLinks>
    </div>
</template>


<script type="text/javascript">

    import IndexHero from '../components/IndexHero';
    import SocialMedia from '../components/SocialMedia';
    import QuickLinks from '../components/QuickLinks';
    

    export default {
        name: 'Home',
        title: 'Home',
        components: {
            IndexHero,
            QuickLinks,
            SocialMedia
            }
        }
</script>

<style scoped>

</style>