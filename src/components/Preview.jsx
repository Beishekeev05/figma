import reviewImmg from "../assets/image/preview.png";
import "./Preview.css";
import Button from "./UI/Button";
const Preview = () => {
	return (
		<div className="preview">
			<div className="preview_info">
				<h1 className="title">
					Делайте снимки и записывайте экран <span>в один клик</span>
				</h1>
				<p className="description">
					Вместе со Screenshoter можно в один клик сделать снимок или записать
					происходящее на экране ПК, чтобы поделиться с кем угодно
				</p>
				<Button variant={"blue"}>Скачать бесплатно</Button>
			</div>
			<div className="preview_img_contaner">
				<img src={reviewImmg} alt="" />
				<div className="block"></div>
				<div className="btn_contaner">
					<Button>Бесплатная программадля Windows</Button>
				</div>
			</div>
		</div>
	);
};

export default Preview;
