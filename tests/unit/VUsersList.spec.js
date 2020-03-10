import { shallowMount } from '@vue/test-utils';
import VUsersList from '@/components/VUsersList.vue';

describe('VUsersList', () => {
    const build = () => {
        const wrapper = shallowMount(VUsersList);

        return {
            wrapper,
            regForm: () => wrapper.find('.new-user'),
        };
    };

    it('Renders the component', () => {
        // arrange
        const { wrapper } = build();
        // assert
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Renders main components', () => {
        const { regForm } = build();
        expect(regForm().exists()).toBe(true);
    });
});
