import style from './Button.module.css'

export const Button = ({type = 'button', content, onClickFn, icon}) => {
  return (
    <button 
        className={style.button}
        type={type}
        onClick={!onClickFn ? null : onClickFn}
    >
        {
            icon && <><i className={icon}></i> &nbsp;</>
        }
        {content}
    </button>
  )
}
