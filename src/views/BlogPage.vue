<template>
<section class="text-gray-400 bg-black body-font">
  <div class="container px-5 py-24 mx-auto">
    <BlogHeader />
    <div class="flex flex-wrap -m-4">
        <BlogCard />
    </div>
  </div>
</section>
</template>


<script type="text/javascript">

    import BlogCard from '../components/blog/BlogCard';
    import BlogHeader from '../components/blog/BlogHeader';

    export default {
        name: 'BlogPage',
        title: 'Blog',
        components: {
            BlogCard,
            BlogHeader
            }
        }
</script>

<style scoped>

</style>