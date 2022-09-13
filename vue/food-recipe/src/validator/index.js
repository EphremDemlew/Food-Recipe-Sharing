import { useField } from "vee-validate";

const vee = () => {
  function validateField(value) {
    if (!value) {
      return "this field is required";
    }

    if (value.length < 8) {
      return "this field must contain at least 8 characters";
    }

    return true;
  }
  const { value, errorMessage } = useField("fullName", validateField);
};
