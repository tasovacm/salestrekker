const Intl = require('react-native-intl');


export const formatter = {
    toCurrency: (number: number) => {
        return (new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD'
        }).format(number)).then((res: string) => {
            return res
        })
    },
    toNumber: (string: any) => {
        return Number(string.replace(/[^0-9.-]+/g, ""))
    },
    separated: (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
};
