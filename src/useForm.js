export const useForm = () => {
    const [form, setForm] = {
        username: '',
        password: '',
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm(prevState => {
            return { ...prevState, [name]: value, }
        });
    };
    return {
        form,
        onHandleInputChange: handleInputChange,
    };
};