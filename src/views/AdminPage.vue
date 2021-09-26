<template>
    <div>
        <section class="text-gray-400 bg-black body-font">
            <div class="container px-5 py-24 mx-auto">
            <AdminHeader />
            <ProjektForm />
            <SkillForm />
            </div>
        </section>
    </div>
</template>

<script>
    import AdminHeader from '../components/admin/AdminHeader';
    import ProjektForm from '../components/admin/ProjektForm';
    import SkillForm from '../components/admin/SkillForm';
    export default {
        name: 'AdminPage', 
        title: 'Admin',
        components: {
            AdminHeader,
            ProjektForm,
            SkillForm
        }
    }
</script>
