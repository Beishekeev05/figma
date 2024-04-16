import "./TextCard.css";

const TextCard = (props) => {
	const {title,subtitle,subHeader,subText} = props
	return (
		<div className="textBlock">
			<h1>{title}</h1>
			<p className="fisrtText">
			{subtitle}
			</p>
			<p className="secondText">
				<span>{subHeader}</span>
				{subText}
			</p>
		</div>
	);
};

	
export default TextCard;