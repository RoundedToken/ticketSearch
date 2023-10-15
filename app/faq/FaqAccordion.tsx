'use client';
import MenuAccordion from '@/components/MenuAccordion/MenuAccordion';
import React from 'react';

const FaqAccordion = () => {
    return (
        <MenuAccordion>
            <MenuAccordion.Group title="Что такое Билетопоиск?">
                <MenuAccordion.Item title="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов." />
            </MenuAccordion.Group>

            <MenuAccordion.Group title="Какой компании принадлежит Билетопоиск?">
                <MenuAccordion.Item title="Сервис принадлежит компании Яндекс." />
            </MenuAccordion.Group>

            <MenuAccordion.Group title="Как купить билет на Билетопоиск?">
                <MenuAccordion.Item title="Выберите понравившийся фильм, добавьте его в корзину и оплатите любой картой." />
            </MenuAccordion.Group>

            <MenuAccordion.Group title="Как оставить отзыв на Билетопоиск?">
                <MenuAccordion.Item title="Перейдите на страницу фильма и добавьте отзыв." />
            </MenuAccordion.Group>
        </MenuAccordion>
    );
};

export default FaqAccordion;
