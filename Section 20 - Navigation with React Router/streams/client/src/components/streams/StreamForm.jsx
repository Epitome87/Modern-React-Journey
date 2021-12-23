import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderError = (meta) => {
  const { error, touched } = meta;

  if (touched && error) {
    return (
      <div className='ui error message'>
        <div className='header'>{error}</div>
      </div>
    );
  }
};

const renderInput = ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  return (
    <div className={className}>
      <label htmlFor={input.name}>{label}</label>
      <input id={input.name} {...input} autoComplete='off' />
      {renderError(meta)}
    </div>
  );
};

function StreamForm(props) {
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className='ui form error'>
      <Field name='title' component={renderInput} label='Enter Title' />
      <Field
        name='description'
        component={renderInput}
        label='Enter Description'
      />
      <button className='ui button primary'>Submit</button>
    </form>
  );
}

const validateForm = (formValues) => {
  const { title, description } = formValues;
  const errorObj = {};

  if (!title) errorObj.title = 'You must enter a title';
  if (!description) errorObj.description = 'You must enter a description';

  return errorObj;
};

export default reduxForm({
  form: 'StreamForm',
  validate: validateForm,
})(StreamForm);
