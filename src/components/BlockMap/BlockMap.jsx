import Card from "../UI/Card";
import "./BlockMap.css";
import arrowImg from "../../assets/svg/fullscreen 1.svg";
import CrayonImg from "../../assets/svg/crayon 1.svg";
import ChatImg from "../../assets/svg/chat 1.svg";
import RaindropImg from "../../assets/svg/raindrop 1.svg";
import Button from "../UI/Button";
const BlockMap = () => {
	const Date = [
		{ text: "Выбирайте цвети рисуйте карандашом", icon: arrowImg },
		{
			text: "Используйте стрелку",
			icon: CrayonImg,
		},
		{ text: "Оставляйте комментарии", icon: ChatImg },
		{ text: "Размывайте необходимую область", icon: RaindropImg },
	];
	return (
		<div className="blockStop">
			<div className="BlockMap">
				{Date.map((item) => (
					<Card key={item.text} text={item.text} icon={item.icon} />
				))}
			</div>
			<div className="Variant">
        <Button variant={"black"}>Скачать бесплатно</Button>
			</div>
		</div>
	);
};

export default BlockMap;
