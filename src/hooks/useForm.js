import React from "react";

export function useForm(inputValues) {
  const [values, setValues] = React.useState(inputValues);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}

//const {values, handleChange, setValues} = useForm({})
