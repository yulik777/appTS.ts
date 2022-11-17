//Необходимо сделать валидацию формы
interface IForm {
    name: string;
    password: string;
}

const form: IForm = {
    name: "Yulik",
    password: '123'
};
const formValidation = {
    name: {isValid: true},
    password: { isValid: false, errorMessage: 'Must be 5 symbols'}
}
// ответ
type Validation<T> = {
    [K in keyof T]: {
        isValid: true
    } | {
        isValid: false, 
        errorMessage: string;
    }
}