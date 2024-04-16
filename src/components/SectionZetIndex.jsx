import "./SectionZetIndex.css";
import Ponchick from "../assets/svg/ponchik.svg";
import LinearLine from "../assets/svg/line.svg";
import BlueCard from "./SecondSections/BlurCard";
import TextCard from "./SecondSections/TextCard";

const SectionZetIndex = () => {
	return (
		<div className="width">
			<img className="LinearLine" src={LinearLine} alt="" />
			<div className="ponchick">
				<img className="ponchikImg" src={Ponchick} alt="" />
			</div>
			<div className="blurBlock">
				<BlueCard />
			</div>
			<TextCard
				title="Запись экрана"
				subtitle="Недостаточно снимков? Запишите происходящее на экране со своим голосом или звуком системы."
				subHeader="Достаточно нажать две кнопки мыши b"
				subText="Выделить необходимую область и начнется запись видео
        с экрана. Быстро и без сложных настроек"
			/>
		</div>
	);
};
export default SectionZetIndex;
