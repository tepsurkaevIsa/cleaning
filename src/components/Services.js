import React from "react";
import today from '../img/ezhednevnaj-uborka.jpg'
import remont from '../img/7b36.jpg'
import mebel from '../img/furniture-cleaning1.jpg'
import cover from '../img/L_height.jpg'
import dez from '../img/post2.jpg'
import bassen from '../img/fac8.jpg'
import terret from '../img/uborkaterritorii.jpg'

const Services = () => {
  return (
    <section>
      <h2>Наши Услуги</h2>

      {/* Ежедневная уборка */}
      <div className="service-item">
        <img src={today} alt="Изображение услуги" />
        <div className="service-item-content">
          <h3>Ежедневная уборка</h3>
          <p>Поддержание чистоты в вашем офисе или доме каждый день.</p>
          <ul>
            <li>Пылесосим полы и ковры</li>
            <li>Моем зеркала и стеклянные поверхности</li>
            <li>Убираем пыль со всех поверхностей</li>
            <li>Очищаем ванные и туалеты</li>
          </ul>
          <a href="tel:+79853196269"><button>Заказать</button></a>
        </div>
      </div>



      {/* Уборка после ремонта */}
      <div className="service-item">
        <img src={remont} alt="Изображение услуги" />
        <div className="service-item-content">
          <h3>Уборка после ремонта</h3>
          <p>Устранение всех следов ремонтных работ.</p>
          <ul>
            <li>Уборка пыли со всех поверхностей</li>
            <li>Мойка окон и подоконников</li>
            <li>Чистка ковров и полов</li>
            <li>Мойка и дезинфекция санузла</li>
          </ul>
          <a href="tel:+79853196269"><button>Заказать</button></a>
        </div>
      </div>

      {/* Чистка мягкой мебели */}
      <div className="service-item">
        <img src={mebel} alt="Изображение услуги" />
        <div className="service-item-content">
          <h3>Чистка мягкой мебели</h3>
          <p>
            Глубокая чистка мягкой мебели с использованием специализированных
            моющих средств.
          </p>
          <ul>
            <li>Удаление пятен и загрязнений</li>
            <li>Глубокая чистка тканевых покрытий</li>
            <li>Дезинфекция и удаление запахов</li>
            <li>Восстановление первоначального цвета</li>
          </ul>
          <a href="tel:+79853196269"><button>Заказать</button></a>
        </div>
      </div>

      {/* Чистка ковров */}
      <div className="service-item">
        <img src={cover} alt="Чистка ковров" />
        <div className="service-item-content">
          <h3>Чистка ковров</h3>
          <p>
            Профессиональная чистка ковровых покрытий на высококачественном
            оборудовании.
          </p>
          <ul>
            <li>Удаление устойчивых пятен и загрязнений</li>
            <li>Глубокое проникновение в волокна ковра</li>
            <li>Безопасно для детей и домашних животных</li>
            <li>Быстрое высыхание после процедуры</li>
          </ul>
          <a href="tel:+79853196269"><button>Заказать</button></a>
        </div>
      </div>

      {/* Дезинфекция помещений */}
      <div className="service-item">
        <img src={dez} alt="Дезинфекция помещений" />
        <div className="service-item-content">
          <h3>Дезинфекция помещений</h3>
          <p>
            Обработка помещений с целью уничтожения вирусов, бактерий и других
            микроорганизмов.
          </p>
          <ul>
            <li>Использование безопасных дезинфицирующих средств</li>
            <li>Обработка всех доступных поверхностей</li>
            <li>Гарантия безопасности для жителей после обработки</li>
            <li>Удаление неприятных запахов</li>
          </ul>
          <a href="tel:+79853196269"><button>Заказать</button></a>
        </div>
      </div>

    

      {/* Чистка бассейнов */}
      <div className="service-item">
        <img src={bassen} alt="Чистка бассейнов" />
        <div className="service-item-content">
          <h3>Чистка бассейнов</h3>
          <p>
            Обслуживание и чистка бассейнов с использованием профессионального
            оборудования.
          </p>
          <ul>
            <li>Фильтрация и очистка воды</li>
            <li>Дезинфекция и хлорирование</li>
            <li>Чистка дна и стенок бассейна</li>
            <li>Замена и обновление воды</li>
          </ul>
          <a href="tel:+79853196269"><button>Заказать</button></a>
        </div>
      </div>

      {/* Уборка территорий */}
      <div className="service-item">
        <img src={terret} alt="Уборка территорий" />
        <div className="service-item-content">
          <h3>Уборка территорий</h3>
          <p>
            Чистка и уборка прилегающих территорий, включая парковки, дорожки и
            зеленые зоны.
          </p>
          <ul>
            <li>Уборка мусора и листьев</li>
            <li>Коска газона и обрезка кустарников</li>
            <li>Мойка тротуаров и площадок</li>
            <li>Установка и замена малых архитектурных форм</li>
          </ul>
          <a href="tel:+79853196269"><button>Заказать</button></a>
        </div>
      </div>


    </section>
  );
};

export default Services;
