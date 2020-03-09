import { shallowMount } from '@vue/test-utils';
import UsersView from '@/views/UsersView.vue';
import VUsersList from '@/components/VUsersList.vue';
import VCreatUser from '@/components/VCreatUser.vue';

describe('UsersView', () => {
    const build = () => {
        const wrapper = shallowMount(UsersView);

        return {
            wrapper,
            usersList: () => wrapper.find(VUsersList),
            creatUser: () => wrapper.find(VCreatUser),
        };
    };

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
});
