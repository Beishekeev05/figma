import "./Kapthcha.css";
import Mini from "./Mini";
import imgNewPonchick from "../../assets/svg/ponch.svg";
import imgCube from "../../assets/svg/BlackCube.svg";
import imgConus from "../../assets/svg/Conus.svg";
import cube from '../../assets/svg/cub.svg'
import Zefir from '../../assets/svg/Zefir.svg'
import BigZefir from '../../assets/svg/BigZefir.svg'
const Kapthcha = () => {
	return (
		<div className="GIG">
			<div className="HeaderText">
				<h1>
					<span>Screenshoter</span> - это функции <br /> на каждый день
				</h1>
				<div className="Pustoy">
          <img className="cube" src={cube} alt="#" />
        </div>
				<div className="SoberyBlock">
          <div className="leftImg">
          <img className="leftZefir" src={Zefir} alt="#" />
          </div>
					<Mini
						imgOn={imgNewPonchick}
						textOne="01."
						textTwo="Обмен идеями"
						textThree="Когда нужно что-то наглядно показать коллеге, исполнителю или заказчику — можно сделать снимок экрана и добавить к нему комментарий. "
						textFour="А если ситуация требует более детального объяснения — окей, не проблема. Screenshoter поможет записать видео экрана вместе с вашими голосовыми комментариями"
					/>
					<Mini
						imgOn={imgCube}
						textOne="02."
						textTwo="Создание инструкций"
						textThree="Нужно что-то наглядно объяснить? Создавайте удобные, пошаговые инструкции, добавляя комментарии
            и визуальные отметки в необходимом месте скриншота. "
						textFour="Поделиться снимком или видеозаписью можно с помощью ссылки, которая мгновенно появляется в буфере обмена
            "
					/>
					<Mini
						imgOn={imgConus}
						textOne="03."
						textTwo="Обратная связь"
						textThree="Если в процессе работы приложения, сайта или сервиса возникла ошибка, её можно моментально зафиксировать.
            "
						textFour="Отправьте скриншот в техподдержку, где будет видно, в чем именно заключается проблема
            "
					/>
          <div className="BigZefir">
            <img className="BigZefi" src={BigZefir} alt="#" />
          </div>
				</div>
				<div className="CardBlocksTwo"></div>
			</div>
		</div>
	);
};

export default Kapthcha;
