import { shallowMount } from '@vue/test-utils';
import UserView from '@/views/UserView.vue';
import UserButton from '@/components/UserButton.vue';
import UserDashboard from '@/components/UserDashboard.vue';
import UserPopUpForm from '@/components/UserPopUpForm.vue';

describe('UserView', () => {
    const mockFn = jest.fn();
    const build = () => {
        const wrapper = shallowMount(UserView);
        const userBtn = shallowMount(UserButton);
        const formq = shallowMount(UserPopUpForm);
        return {
            formq,
            wrapper,
            userBtn,
            creatButton: () => wrapper.find(UserButton),
            userPlace: () => wrapper.find(UserDashboard),
            // findButtom: () => userBtn.find('button'),
            PopUpForm: () => wrapper.find(UserPopUpForm),
        };
    };
    it('renders the component', () => {
        // arrange
        const { wrapper } = build();
        // assert
        expect(wrapper.html()).toMatchSnapshot();
    });
    it('renders main child components', () => {
        // arrange
        const { creatButton, userPlace, findButtom } = build();
        // assert
        expect(creatButton().exists()).toBe(true);
        expect(userPlace().exists()).toBe(true);
        expect(findButtom().exists()).toBe(true);
    });
    it('click on the btn success', () => {
        const { userBtn } = build();
        userBtn.find('button').trigger('click');
        expect(mockFn).toHaveBeenCalled();
    });
});
