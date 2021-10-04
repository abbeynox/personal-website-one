<template>
    <div>
            <div class="container content-center px-5 pt-24 pb-1 mx-auto">
                
                <div class="flex flex-col content-center w-full mb-20 text-center">
                    <img class="mx-auto w-40 h-40 text-white p-0.5 bg-purple-500 rounded-full m-5" alt="hero" src="../assets/YaoDev.jpg">
                    <h1 class="mb-4 text-6xl font-bold text-white sm:text-6xl title-font">Yao Kaiser</h1>
                    <p class="mx-auto mt-2 text-lg leading-relaxed text-gray-400 lg:w-2/3">Ich bin Yao - 🖥Software Entwickler, 💜Politisch engagiert und ein 🎭Mensch.</p>
                </div>   
            </div>

            <div class="container mx-auto">
                <div v-for="link in links" :key="link.id" class="flex flex-wrap m-2">
                    <LinkCard :name="link.name" :url="link.url" :icon="link.icon" :toColor="link.toColor" :fromColor="link.fromColor" :viaColor="link.viaColor"></LinkCard>
                </div>
            </div>

    </div>
</template>

<script type="text/javascript">

    import LinkCard from '../components/cards/LinkCard';
    import links from '../data/links.js';

    export default {
        name: 'LinksPage',
        title: 'Links', 
        data: function() {
            return {
                links: links
            };
        },
        components: {
            LinkCard
            }
        }
</script>