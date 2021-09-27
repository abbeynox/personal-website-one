<template>
<section class="text-gray-400 bg-black body-font">
    <Header title="Blog" description="Eine Sammlung von Blogs die ich verfasst habe."></Header>
    <div class="flex flex-wrap -m-4">
        <BlogCard />
    </div>
</section>
</template>


<script type="text/javascript">

    import BlogCard from '../components/blog/BlogCard';
    import Header from '../components/Header';

    export default {
        name: 'BlogPage',
        title: 'Blog',
        components: {
            Header,
            BlogCard,
            }
        }
</script>

<style scoped>

</style>