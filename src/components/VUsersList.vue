<template>
    <div class="home">
        <div class="new-user">
            <button v-on:click='addNewUser'>New user</button>
        </div>
        <div class="all-users">
            <div class="new_one" v-for="(item, index) of usersArray"
            :key='item.name'
            >
                <p>{{item.name}}</p>
                <p>{{item.position}}</p>
                <p>{{item.address}}</p>
                <p>{{item.company}}</p>
                <p :name='index' v-on:click="edit">EDIT</p>
                <p>DEL</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'VUsersList',
    methods: {
        // Show pop-up with registration form for registration new users
        addNewUser() {
            this.$store.dispatch('TOGGLE_POP_UP', true);
        },
        // eslint-disable-next-line no-unused-vars
        edit(e, target) {
            const myObj = {
                data: this.usersArray[e.target.getAttribute('name')],
                id: e.target.getAttribute('name'),
            };
            this.$store.dispatch('EDIT_USER', myObj);
        },
    },
    computed: {
        ...mapState({
            usersArray: (state) => state.newUser.usersArray,
        }),
    },
};
</script>

<style>
.new_one{
    border: 1px solid black;
}
</style>
