<template>
    <div class="home" v-show="toggle">
        <div class="new">
                    <div class="user-profile___btn_close">
            <input class="close__input" type="submit" value="Close" v-on:click='closePopUp'>
        </div>
        <div class="user-profile__avatar">
            <p>Your picture</p>
            <img class="avatar__src" src="#" alt="">
        </div>
        <div class="user-profile__name">
            <p>Your name</p>
            <input class="name__input" type="text" v-model="new_user.name">
        </div>
        <div class="user-profile__position">
            <p>Your position</p>
            <input class="possition__input" type="text" v-model="new_user.position">
        </div>
        <div class="user-profile__address">
            <p>Your address</p>
            <input class="address__input" type="text" v-model="new_user.address">
        </div>
        <div class="user-profile__company">
            <p>Your company</p>
            <input class="company__input" type="text" v-model="new_user.company">
        </div>
        <div class="user-profile___btn_save">
                <input class="save__input" type="submit" value="Save" v-on:click='saveNewUser'>
        </div>
        </div>
        <div class="eddit">
            <input type="text" v-model="edit_user['data'].name">
             <input type="text" v-model="edit_user['data'].position">
              <input type="text" v-model="edit_user['data'].address">
               <input type="text" v-model="edit_user['data'].company">
               <input type="submit" v-on:click='saveEdituser' >
               {{edit_user}}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'VCreatUser',
    data() {
        return {
            new_user: {
                name: 'George',
                position: 'Ceo',
                address: 'epronovskay 21',
                company: 'BALT',
            },
        };
    },
    computed: {
        ...mapState({
            toggle: (state) => state.newUser.toggle,
            edit_user: (state) => state.newUser.editUser,
        }),
    },
    methods: {
        // Close pop-up with registration form for registration new users
        closePopUp() {
            this.$store.dispatch('TOGGLE_POP_UP', false);
            this.new_user = {};
        },
        // Save new user and close pop-up
        saveNewUser() {
            this.$store.dispatch('SAVE_NEW_USER', this.new_user);
            this.new_user = {};
            this.closePopUp();
        },
        saveEdituser() {
            this.$store.dispatch('SAVE_EDITED_USER', this.edit_user);
        },
    },
};
</script>

<style>

</style>
