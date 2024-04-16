import "./OneClick.css";
import eslip from "../../assets/image/lion.png";
import miniBlock from "../../assets/svg/Color.svg";
import BlueCard from "./BlurCard";
import TextCard from "./TextCard";
const OneClick = () => {
	return (
		<div className="SectionMain">
			<div className="TextCard"></div>
			<div className="ElipsCard">
				<div className="bochka">
					<img className="name" src={eslip} alt="#" />
				</div>
				<div className="miniBlockOn">
					<img src={miniBlock} alt="#" />
				</div>
				<div className="btn__Card">
					<BlueCard />
				</div>
			</div>
			<div className="baba">
				<TextCard
					title="В один клик"
					subHeader="Не нужно запоминать комбинации клавиш"
					subtitle="На клавиатуре, чтобы сделать скриншот или начать записывать видео с экрана. "
					subText="
          Просто нажмите две кнопки мыши
          или настройте горячую кнопку на любую удобную клавишу"
				/>
			</div>
		</div>
	);
};

export default OneClick;
