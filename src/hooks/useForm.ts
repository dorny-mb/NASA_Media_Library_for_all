import { useState } from "react";

const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e: any) => {
      setValues((prev: any) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
  ];
};

export default useForm;
