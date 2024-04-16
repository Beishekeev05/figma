import Card from "./UI/Card";
import "./Section.css";
import imgs from "../assets/svg/cursor.svg";
import imgtwo from "../assets/svg/two.svg";
import imgthree from "../assets/svg/001-puzzle.svg";
import imgfour from "../assets/svg/002-heart.svg";

const Section = () => {
	const DATA = [
		{ text: "Снимок и запись экрана в 1 клик", icon: imgs },
		{ text: "Моментальная ссылка на файл", icon: imgtwo },
		{ text: "Удобный редактор снимков", icon: imgthree },
		{ text: "Бесплатно и без регистрации", icon: imgfour },
	];
	return (
		<div className="boxing">
			<div className="flexBox">
				<div className="h1block">
					<h1>
						Встречайте — скриншоты <br /> и запись экрана <span>2 в 1</span>
					</h1>
				</div>
				<div className="pblock">
					<p>
						Больше не нужно искать две отдельные программы для экрана.
						Screenshoter поможет сделать <br />{" "}
						<b> снимок экрана, записать видео и поделиться им с кем угодно.</b>{" "}
						Можно выделить весь экран, определенную область или активное окно
					</p>
				</div>
			</div>
			<div className="blockFlex">
				{DATA.map((item) => (
					<Card key={item.text} text={item.text} icon={item.icon} />
				))}
			</div>
		</div>
	);
};

export default Section;
