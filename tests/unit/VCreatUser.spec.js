import { shallowMount } from '@vue/test-utils';
import VCreatUser from '@/components/VCreatUser.vue';

describe('VCreatUser', () => {
    const build = () => {
        const wrapper = shallowMount(VCreatUser);

        return {
            wrapper,
            avatar: () => wrapper.find('.avatar__src'),
            name: () => wrapper.find('.name__input'),
            position: () => wrapper.find('.possition__input'),
            address: () => wrapper.find('.address__input'),
            company: () => wrapper.find('.company__input'),
            buttonSave: () => wrapper.find('.save__input'),
            buttonClose: () => wrapper.find('.close__input'),
        };
    };

    it('Renders the component', () => {
        // arrange
        const { wrapper } = build();
        // assert
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Renders main components', () => {
        // arrange
        const { avatar, name, position, address, company, buttonClose, buttonSave } = build();
        // assert
        expect(avatar().exists()).toBe(true);
        expect(name().exists()).toBe(true);
        expect(position().exists()).toBe(true);
        expect(address().exists()).toBe(true);
        expect(company().exists()).toBe(true);
        expect(buttonClose().exists()).toBe(true);
        expect(buttonSave().exists()).toBe(true);
    });
});
