import React from 'react';
import logo from '../img/2023.jpg'


import like from '../img/like.png'
import person from '../img/leadership_7288111.png'
import fert from '../img/fertilizer_3812858 (1).png'
import polisher from '../img/polisher_9615238.png'
import time from '../img/daily-routine_8633985.png'
import price from '../img/ruble_2325938.png'
import clin from '../img/cl.jpeg'

const Home = () => {
    return (
        <div className="home-content">

            {/* Герой раздел */}
            <section className="intro">
                
               
             <div>
                <h2>Добро пожаловать в нашу клининговую компанию!</h2>
                <p>Начиная с 2022 года, наша компания зарекомендовала  себя как надёжный партнер в сфере клининга в Москве.</p>

                <h3>Наши клиенты</h3>
                <span>Мы специализируемся на уборке коммерческих объектов, таких как офисы, магазины, склады и производственные помещения. Независимо от объема и сложности заказа, наша команда профессионалов гарантирует отличный результат. Работая с разнообразными клиентами, от частных лиц до государственных организаций, мы придерживаемся высоких стандартов качества.</span>

                <h3 className='introH3'>Опыт и репутация</h3>
                <p className='introP' >С годами накопленный опыт, команда профессионалов и постоянное стремление к совершенству сделали нас одним из лидеров в сфере клининга. Наша репутация основана на доверии клиентов и качестве предоставляемых услуг.</p>
  
             </div>
             
                <img src={logo} alt="Клининговые услуги" />
                {/* // <button>Свяжитесь с нами</button> */}
            </section>

            {/* О нас */}


            <section className="about">
            <img  src={clin} alt="О компании Качественные решения" />
                <h2>История компании</h2>
                <p>С момента своего основания в 2022 году "Качественные решения" постоянно росли и развивались, адаптируясь к изменяющимся требованиям рынка и желаниям клиентов. Начав с маленькой команды специалистов, сегодня мы гордимся тем, что являемся одной из ведущих клининговых компаний в регионе.</p>

                <h3>Наша миссия</h3>
                <p>Мы стремимся создавать чистое и комфортное пространство для каждого клиента, принося в каждый дом и офис чистоту и порядок. Мы верим, что наш профессионализм и внимание к деталям делают повседневную жизнь наших клиентов немного проще и приятнее.</p>

                <h3>Будущее</h3>
                <p>Мы не стоим на месте и постоянно ищем новые методики и технологии для улучшения качества наших услуг. Наша цель - стать лидером на рынке клининговых услуг, предоставляя не только высококачественный сервис, но и внедряя инновационные решения в свою работу.</p>
 
                
            </section>




            {/* Преимущества */}
            <section className="advantages">
                <h2>Наши преимущества</h2>
                <ul>
                    <li>Высокое качество услуг <img src={like} alt=''/> </li>
                    <li>Индивидуальный подход <img src={person} alt=''/></li>
                    <li>Экологически чистые моющие средства <img src={fert} alt=''/></li>
                    <li>Профессиональное оборудование <img src={polisher} alt=''/></li>
                    <li>Быстрое выполнение заказов <img src={time} alt=''/></li>
                    <li>Доступные цены <img src={price} alt=''/></li>
                </ul>
            </section>

    

            {/* Контакты */}
            <section className="contact">
                <h2>Контактная информация</h2>
                <p>Email: <a href="mailto:mst.chs2023@gmail.com">mst.chs2023@gmail.com</a></p>
                <p>Телефон: <a href="tel:+79853196269">+7 (985) 319-62-69</a></p>
                <p>Адрес: ул. Чистоты, д. 10, г. Москва</p>
            </section>

        </div>
    );
}

export default Home;



