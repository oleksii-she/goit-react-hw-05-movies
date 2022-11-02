import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
export const FormSearch = ({ onSubmitSearchValue }) => {
  const initialValues = {
    value: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { value } = values;
    if (value.trim() === '') {
      return toast.error('Type something', {
        position: 'top-right',
      });
    }

    onSubmitSearchValue(value);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <button type="submit"></button>
        <Field
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="enter a name"
          name="value"
        />
        <Toaster />
      </Form>
    </Formik>
  );
};
