import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/services">Услуги</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
