import React from 'react';

const Contact = () => {
    return (
        <section className='contact-div'>
            <h2>Контакты</h2>
            <address>
                <p>Адрес: ул. Примерная, 123, г. Город</p>
                <p>Email: <a href="mailto:mst.chs2023@gmail.com">mst.chs2023@gmail.com</a></p>
                <p>Телефон: <a href="tel:+79853196269">+7 (985) 319-62-69</a></p>
            </address>
            <p>Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами по указанным контактам.</p>
        </section>
    );
}

export default Contact;

