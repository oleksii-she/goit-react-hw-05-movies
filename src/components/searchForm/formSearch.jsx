import { Formik } from 'formik';
import { Input, FormStyled, Button, Label } from './form.styled';
import { FaSearch } from 'react-icons/fa';
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
      <FormStyled>
        <Label htmlFor="">
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter the name of the movie"
            name="value"
          />
          <Button type="submit">
            <FaSearch />
          </Button>
        </Label>
        <Toaster />
      </FormStyled>
    </Formik>
  );
};
