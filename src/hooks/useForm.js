import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setField(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setField(e.target.getAttribute('name'), e.target.value);
  }

  function clearForm() {
    setValues(initialValues);
  }
  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
