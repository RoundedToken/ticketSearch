import React from 'react';
import Select from '../Select/Select';
import { setFilterByGenre } from '@/redux/filterSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const FilterByGenre = () => {
    const filterByGenre = useSelector((state: RootState) => state.filterSlice.byGenre);

    return (
        <Select
            value={filterByGenre.title}
            title="Жанр"
            placeholder="Выберите жанр"
            action={setFilterByGenre}
        >
            <Select.Item title="Не выбран" value="" />
            <Select.Item title="Боевик" value="Боевик" />
            <Select.Item title="Комедия" value="Комедия" />
            <Select.Item title="Фэнтези" value="Фэнтези" />
            <Select.Item title="Ужасы" value="Ужасы" />
        </Select>
    );
};

export default FilterByGenre;
