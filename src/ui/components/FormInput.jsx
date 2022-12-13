import style from './FormInput.module.css';

export const FormInput = ({label, inputData, placeholder, value, onChangeFn}) => {
  return (

        <div>
            <label htmlFor={inputData}>{label}</label>
            <div className={style.formControl}>
                <input
                    autoComplete='off'
                    className={style.inputField} 
                    type={inputData} 
                    name={inputData}
                    id={inputData}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChangeFn}
                />
            </div>

        </div>

    )
}
