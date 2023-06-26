import React from 'react';
import Select from '../Select/Select';
import { useFetchCinemasQuery } from '@/services/fetchCinemas';
import { setFilterByCinema } from '@/redux/filterSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const FilterByCinema = () => {
    const filterByCinema = useSelector((state: RootState) => state.filterSlice.byCinema);
    const { data, isFetching } = useFetchCinemasQuery(undefined);

    return (
        <Select
            value={filterByCinema.title}
            title="Кинотеатр"
            placeholder="Выберите кинотеатр"
            action={setFilterByCinema}
        >
            <>
                <Select.Item title="Не выбран" value="" />

                {isFetching && (
                    <>
                        <Select.Item title="Загрузка..." value="" />
                        <Select.Item title="Загрузка..." value="" />
                        <Select.Item title="Загрузка..." value="" />
                    </>
                )}

                {data &&
                    data.map((cinema) => (
                        <Select.Item key={cinema.id} title={cinema.name} value={cinema.id} />
                    ))}
            </>
        </Select>
    );
};

export default FilterByCinema;
