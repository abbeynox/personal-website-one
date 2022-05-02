<template>
    <div>
        <Header title="Impressum" description="Inhaltlich Verantwortlicher"></Header>
        
        <div class="container px-5 mx-auto">
            <div class="flex flex-col w-full mb-10 text-center">
                <h1 class="text-2xl font-bold text-white sm:text-2xl title-font">Yao Kaiser</h1>
                <p class="text-2xl text-white">Solibodenstrasse 8</p>
                <p class="text-2xl text-white">8180 Bülach</p>
            </div>  

            <div class="flex flex-col w-full mb-10 text-center">
                <h1 class="text-2xl font-bold text-white sm:text-2xl title-font">Contact</h1>
                <p class="text-2xl text-white"><i class="fas fa-envelope"></i> yao.kaiser@proton.me</p>
            </div>  
        </div>
        
    </div>
</template>

<script>
import Header from "../components/Header"
export default {
    name: 'Impressum',
    title: 'Imprint',
    components: {
        Header
    }
}
</script>

<style scoped>
</style>