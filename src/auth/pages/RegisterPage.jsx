import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { Button, FormInput, PasswordInput } from "../../ui";


const formData = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
}

export const RegisterPage = () => {

    const {name, email, password, passwordConfirmation, onInputChange, formState} = useForm(formData);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

  return (
    <div className="center-elements">
        <form onSubmit={onSubmit} className='form-container'>
            <h1>Register</h1>

            <FormInput label={'Name'} inputData={'name'} placeholder={'Your name'} value={name} onChangeFn={onInputChange} />

            <FormInput label={'Email'} inputData={'email'} placeholder={'Your email'} value={email} onChangeFn={onInputChange} />

            <PasswordInput show={true} label={'Password'} inputData={'password'} placeholder={'Create password'} value={password} onChangeFn={onInputChange}/>
            
            <PasswordInput label={'Confirm password'} inputData={'passwordConfirmation'} placeholder={'Match password'} value={passwordConfirmation} onChangeFn={onInputChange}/>

            <Button content={'Sign up'} type='submit'/>

            <Link to='../login' className="align-right">Already have an account? Log in!</Link>
        </form>
    </div>
  )
}
