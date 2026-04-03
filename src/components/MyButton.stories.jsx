import MyButton from "./MyButton";

export default {
    title: 'components/MyButton',
    component: MyButton,
    argTypes: {
        backgroundColor: { control: 'color' }, // This gives you a color picker!
        variant: {
            control: 'select',
            options: ['primary', 'secondary'],
        },
        disabled: {
            control: 'boolean', // This gives you a toggle switch
        },
    },
};

export const Primary = {
    args:{
        label:'Primary',
        variant:'primary',
    },
};

export const Success = {
    args:{
        label:'Save Changes',
        backgroundColor:"green\n",
    },
};

export const Danger = {
    args: {
        label: 'Delete Item',
        backgroundColor: '#dc3545',
    },
};

export const Interactive = {
  args: {
      label: 'Interactive Button',
      variant: "secondary",
      disabled: false,
      backgroundColor: "green"
  },
  argTypes: {
    // this shows Radio selection
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    // this shows a Toggle switch
    disabled: {
      control: 'boolean',
    },
    backgroundColor: {
      control: 'color'
    }
  },
};