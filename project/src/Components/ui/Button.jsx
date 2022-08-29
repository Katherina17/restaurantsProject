import './Button.css';

function Button({children, ...props}){
    return(
        <button {...props}>
            <p className="btn-style">
                {children}
            </p>
        </button>
    )
}

export default Button;