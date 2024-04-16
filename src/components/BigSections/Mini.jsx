import "./Mini.css";

const Mini = (props) => {
	const { imgOn, textOne, textTwo, textThree, textFour } = props;
	return (
		<div className="Bloks">
			<div className="imgBlockOne">
				<img className="lgbtImg" src={imgOn} alt="#" />
			</div>
			<div className="BrathersBlocks">
				<div className="brather one">
					<p>{textOne}</p>
				</div>
				<div className="brather two">
					<p>{textTwo}</p>
				</div>
			</div>
			<div className="TextDiv">
				<p>{textThree}</p>
				<br />
				<p>{textFour}</p>
			</div>
		</div>
	);
};

export default Mini;
