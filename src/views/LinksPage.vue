<template>
    <div>
        <div class="container content-center px-5 pt-24 pb-1 mx-auto">
            
            <div class="flex flex-col content-center w-full text-center md:m-1">
                <img class="w-40 h-40 p-1 m-5 mx-auto text-white bg-purple-500 rounded-full" alt="hero" src="../assets/YaoDevUkraine.png">
                <h1 class="mb-4 text-6xl font-bold text-white sm:text-6xl title-font">Yao Kaiser</h1>
                <Notification title="Follow my Fediverse accounts" description="I'm also on Mastodon now and would love to see you there too. Register today and join the #Fediverse." icon="fab fa-mastodon" link="https://blog.yao.earth/das-fediverse-bessere-alternative-zu-herkommlichen-social-media-apps"></Notification>
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
    import Notification from '../components/lib/Notification';

    export default {
        name: 'LinksPage',
        title: 'Links', 
        data: function() {
            return {
                links: links
            };
        },
        components: {
            LinkCard,
            Notification
        },
        
        mounted: function() {
            console.log(links)
        }
    }
</script>