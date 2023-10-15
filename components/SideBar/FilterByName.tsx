import { setFilterByName } from '@/redux/filterSlice';
import { RootState } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type TFilterByName = {
    styles: {
        readonly [key: string]: string;
    };
};

const FilterByName = ({ styles }: TFilterByName) => {
    const filterByName = useSelector((state: RootState) => state.filterSlice.byName);
    const dispatch = useDispatch();
    const [inFocus, setInFocus] = useState(false);
    const [inputValue, setInputValue] = useState(filterByName);

    const filterByNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setFilterByName(inputValue));
        }, 500);

        return () => clearTimeout(timeout);
    }, [inputValue, dispatch]);

    return (
        <div className={styles.filterByName}>
            <div className={styles.filterByNameTitle}>Название</div>

            <div className={`${styles.inputContainer} ${inFocus && styles.inputContainerActive}`}>
                <input
                    type="text"
                    placeholder="Введите название"
                    value={inputValue}
                    onChange={(e) => filterByNameOnChange(e)}
                    onFocus={() => setInFocus(true)}
                    onBlur={() => setInFocus(false)}
                />
            </div>
        </div>
    );
};

export default FilterByName;
