import { shallowMount, createLocalVue } from '@vue/test-utils';
import UsersView from '@/views/UsersView.vue';
import VUsersList from '@/components/VUsersList.vue';
import VCreatUser from '@/components/VCreatUser.vue';
import Vuex from 'vuex';
import initialState from '@/store/state';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('UsersView', () => {
    let state;

    const build = () => {
        const wrapper = shallowMount(UsersView, {
            localVue,
            store: new Vuex.Store({ state }),
        });

        return {
            wrapper,
            usersList: () => wrapper.find(VUsersList),
            creatUser: () => wrapper.find(VCreatUser),
        };
    };

    beforeEach(() => {
        state = { ...initialState };
    });

    it('Renders the component', () => {
        // arrange
        const { wrapper } = build();
        // assert
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Renders main child components', () => {
        // arrange
        const { usersList, creatUser } = build();
        // assert
        expect(usersList().exists()).toBe(true);
        expect(creatUser().exists()).toBe(true);
    });

    it('passes a binder toggle', () => {
        // arange
        state.toggle = true;
        const { creatUser } = build();

        // assert
        expect(creatUser().vm.toggle).toBe(state.toggle);
    });
});
