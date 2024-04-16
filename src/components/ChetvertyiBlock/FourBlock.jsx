import "./FourBlock.css";
import TwoImg from "../../assets/image/decretLine.png";
import TextCard from "../SecondSections/TextCard";
import BoxImgOne from '../../assets/image/Rectangle 22.png'
import svgBox from '../../assets/svg/ponchikTwo.svg'
import BlurCard from "../SecondSections/BlurCard";
const FourBlock = () => {
	return (
		<div className="FourBlock">
			<img className="TwoImg" src={TwoImg} alt="#" />
      {/*  */}
			<div className="bloks">
				<div className="boxCard">
					<TextCard
						title="И редактор снимков"
						subtitle="Более 5 инструментов"
						subHeader="Для редактирования выделяете область и редактируете. "
						subText="Если неверно выбрали область — не беда, можно без проблем её передвинуть и/или изменить размер,
            не удаляя то, что уже нарисовано!"
					/>
				</div>
        {/*  */}
			</div>
			<div className="bloks boxSizing">
        <img className="BoxImgOne" src={BoxImgOne} alt="#" />
        <div className="svgBox">
          <img src={svgBox} alt="#" />
        </div>
        <div className="BlurCard">
          <BlurCard/>
        </div>
      </div>
		</div>
	);
};

export default FourBlock;
