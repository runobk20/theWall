import { useState } from "react"
import stl from './FormInput.module.css';

export const PasswordInput = ({label, inputData, value, placeholder, show = false, onChangeFn}) => {

    const [showPassword, setShowPassword] = useState(false);

    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    }

  return (
    <div>
        <label htmlFor={inputData}>{label}</label>
        <span className={stl.formControlRow}>
            <input
            className={stl.passwordField}
            type={(showPassword) ? 'text' : 'password'}
            name={inputData}
            id={inputData}
            placeholder={placeholder}
            value={value}
            onChange={onChangeFn}
            />
            {
                show && <i 
                onClick={showPasswordHandler}
                className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'} ${stl.passwordIcon}`}></i>
            }
        </span>
        
    </div>
  )
}

<i class="fa-solid fa-eye-slash"></i>
