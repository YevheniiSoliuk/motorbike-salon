import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Input from './Input';

const UserDataForm = (props) => {
  const params = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  console.log(props.record.errors);

  const isUserChosen = useMemo(() => {
    return (
      Object.values(props.record.params).length > 0 &&
      props.record.params['user.id']
    );
  }, [props]);

  const onFirstNameSelect = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
    props.record.params.firstName = firstName;
  };

  const onLastNameSelect = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
    props.record.params.lastName = lastName;
  };

  const onEmailSelect = (e) => {
    const email = e.target.value;
    setEmail(email);
    props.record.params.email = email;
  };

  if (params.actionName === 'edit' || isUserChosen) {
    return;
  }

  return (
    <>
      <Input
        name={'first_name'}
        type={'text'}
        defaultValue={firstName}
        onChange={onFirstNameSelect}
        onBlur={() => {}}
        label={'First Name'}
        error={props.record.errors.firstName?.message ?? ''}
        hasError={props.record.errors.firstName}
        placeholder={''}
        required={false}
      />
      <Input
        name={'last_name'}
        type={'text'}
        defaultValue={lastName}
        onChange={onLastNameSelect}
        onBlur={() => {}}
        label={'Last Name'}
        error={props.record.errors.lastName?.message ?? ''}
        hasError={props.record.errors.lastName}
        placeholder={''}
        required={false}
      />
      <Input
        name={'email'}
        type={'text'}
        defaultValue={email}
        onChange={onEmailSelect}
        onBlur={() => {}}
        label={'Email'}
        error={props.record.errors.email?.message ?? ''}
        hasError={props.record.errors.email}
        placeholder={''}
        required={false}
      />
    </>
  );
};

export default UserDataForm;
