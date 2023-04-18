<template>
    <div>
        <section class="text-gray-400 bg-black body-font">
            <Header title="Admin" description="Zugang nur für Administratoren"></Header>
            <ProjektForm />
            <SkillForm />
        </section>
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import ProjektForm from '../components/admin/ProjektForm.vue';
    import SkillForm from '../components/admin/SkillForm.vue';
    export default {
        name: 'AdminPage', 
        title: 'Admin',
        components: {
            Header,
            ProjektForm,
            SkillForm
        }
    }
</script>
