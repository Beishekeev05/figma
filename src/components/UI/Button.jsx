import './Button.css'
const Button = ({ children, variant }) => {
	return (
		<button
			className={
				variant === "blue"
					? "blue-btn"
					: variant === "black"
					? "black-btn"
					: "blur-btn"
			}>{children}</button>
	);
};

export default Button;
