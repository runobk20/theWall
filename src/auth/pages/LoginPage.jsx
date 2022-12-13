import { Link } from 'react-router-dom';
import { singInWithGoogle } from '../../firebase/providers';
import { useForm } from '../../hooks/useForm';
import { FormInput, Button } from '../../ui';
import './LoginPage.css';

const formData = {
	email: '',
	password: '',
};

export const LoginPage = () => {
	const { onInputChange, email, password, formState } = useForm(formData);

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
	};

	return (
		<div className="center-elements">
			<div className="form-container">
				<h1>Login</h1>

				<form onSubmit={onSubmit}>
					<FormInput
						label={'Email'}
						inputData={'email'}
						placeholder={'Your email'}
						value={email}
						onChangeFn={onInputChange}
					/>

					<FormInput
						label={'Password'}
						inputData={'password'}
						placeholder={'Your password'}
						value={password}
						onChangeFn={onInputChange}
					/>

					<div className="button-container">

                        <Button content={'Login'} type={'submit'}/>

                        <Button content={'Google'} onClickFn={singInWithGoogle} icon={'fa-brands fa-google'}/>
                        
					</div>

					<Link to="../register" className="align-right">
						Create Account
					</Link>
				</form>
			</div>
		</div>
	);
};
