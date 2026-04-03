import { Component } from "react";
import MyInput from "./MyInput";

export default {
    title: 'components/MyInput',
    component: MyInput,
    argTypes: {
        label: { control: 'text'},
        placeholder: {control: 'text'},
        labelColor: { control: 'color'},
    },
};

export const Default = {
    args: {
        label: 'Username',
        placeholder: 'Enter your name...',
        labelColor: '#000000',
    },
};

export const DarkMode = {
    args: {
        label: 'Username',
        placeholder: 'Enter your name...',
        labelColor: '#ffffff',
    },
};