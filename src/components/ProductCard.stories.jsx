import ProductCard from './ProductCard';

export default {
    title: 'components/ProductCard',
    component: ProductCard,
    argTypes: {
        textColor: {control: 'color'},
    },
};

export const Default = {
    args:{
        title:'Wireless Headphones',
        price:'$49.99',
        description:'High-quality sound with noise cancellation.',
        imageUrl : '/images/headphones.jpg',
        textColor:'#333333',
    },
};

export const OutOfStock = {
    args: {
        title: 'Smart Watch',
        price: '$99.00',
        description: 'Track your fitness and stay connected.',
        imageUrl: '/images/smartwatch.webp',
    },
};
export const DarkMode = {
    args: {
        ...Default.args,
        textColor: "white",
    },
};