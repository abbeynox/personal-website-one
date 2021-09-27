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
    import Header from '../components/Header';
    import ProjektForm from '../components/admin/ProjektForm';
    import SkillForm from '../components/admin/SkillForm';
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
