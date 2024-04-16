import "./NotBlurBlock.css";
import eliprsBlur from "../../assets/image/blurElips.png";
import blurBGimg from "../../assets/svg/bgImg.svg";
import BlurCard from "../SecondSections/BlurCard";
import TextCard from "../SecondSections/TextCard";
const NotBlurBlock = () => {
	return (
		<div className="ul">
			<div className="elipsBlock">
				<img className="imgBlurelips" src={eliprsBlur} alt="#" />
				<div className="blerCardSectionTwo">
					<BlurCard />
				</div>
				<div className="messageBlock">
					<p className="textMessage">
						<span>Файлы хранятся в течение 1 года</span> с момента создания. Можно их удалять
						самостоятельно. В истории программы доступны последние 5 скриншотов
					</p>
				</div>
				<div className="bgFoto">
					<img className="bgFotoImg" src={blurBGimg} alt="#" />
				</div>
			</div>
			<div className="textCardForSection">
				<TextCard
					title="Мгновенная ссылка"
					subtitle="Мгновенное получение ссылки на снимок
          или видео. Вы только нажали Enter, а ссылка уже
          в буфере обмена. Перейдя по ссылке, можно будет посмотреть ваш снимок или записанное видео"
				/>
			</div>
		</div>
	);
};

export default NotBlurBlock;
