import "./Card.css";
const Card = ({ icon, text }) => {
	return (
		<div className="card_cont">
			<img className="imgison" src={icon} alt="#" />
      <div className="endDive">
			<p className="ptext">{text}</p>
      </div>
		</div>
	);
};

export default Card;
