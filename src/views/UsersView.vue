<template>
    <div class="home">
        <VCreatUser/>
        <VUsersList/>
    </div>
</template>

<script>
import VCreatUser from '@/components/VCreatUser.vue';
import VUsersList from '@/components/VUsersList.vue';

export default {
    name: 'UsersView',
    components: {
        VCreatUser,
        VUsersList,
    },
};
</script>

<style>

</style>
