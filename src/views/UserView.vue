<template>
    <div class="userView">
        <UserDashboard/>
        <UserButton/>
        <UserPopUpForm/>
    </div>
</template>

<script>
import UserButton from '@/components/UserButton.vue';
import UserDashboard from '@/components/UserDashboard.vue';
import UserPopUpForm from '@/components/UserPopUpForm.vue';

export default {
    name: 'UserView',
    components: {
        UserButton,
        UserDashboard,
        UserPopUpForm,
    },
};
</script>

<style>

</style>
