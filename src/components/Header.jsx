import './Heasder.css'
const Header = () => {
  return (
    <header>
      <div className='logo_contaner'>
        <p className='scrinshoot'>Screenshoter+</p>
        <p className='screen-recordere'>Скриншот и запись экрана в один клик</p>
      </div>
      <ul>
        <li>Функции</li>
        <li>Преимущества</li>
        <li>Как изпользовать</li>
        <li>Частые вопросы</li>
        <li>
          <select className='selekt_name' name="" id="">
            <option value="ru">RU</option>
            <option value="eng">ENG</option>
          </select>
        </li>
      </ul>
    </header>
  )
}

export default Header