import '../../styles/common/Button.scss'

function Button({ type, text, onClick }) {
    return (
        <span className={["Button", type].join(" ")}
            onClick={onClick}>
            {text}
        </span>
    );
}

export default Button;

