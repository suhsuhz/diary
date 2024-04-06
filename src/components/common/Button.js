import '../../styles/common/Button.scss'

function Button({ text, onClick }) {
    return (
        <span className="Button"
            onClick={onClick}>
            {text}
        </span>
    );
}

export default Button;

