import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}: any) => {
        const {name, value} = target;
        setFormState({ 
            ...formState,
            [name]: value  //[name] para que se actualice el valor del name
        })
    }

    return {
        ...formState,
        formState,
        onInputChange
    }
}
