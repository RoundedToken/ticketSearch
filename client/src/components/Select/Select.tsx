'use client';
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';
import { createPortal } from 'react-dom';
import { useModal } from '@/hooks/useModal';
import arrowImg from '../../../public/arrow.svg';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

type TSelect = {
    children: React.ReactNode;
    value: string;
    title: string;
    placeholder: string;
    action: ActionCreatorWithPayload<any>;
};

type TSelectItem = {
    title: string;
    value: string;
};

const SelectContext = createContext<any>(null);

const Select = ({ children, value, title, placeholder, action }: TSelect) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState(value);
    const { isOpen, openModal, closeModal } = useModal(dropdownRef, undefined, undefined, false);

    const closeSelectEvent = useCallback(
        (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest(`#${title}`)) closeModal();
        },
        [closeModal, title]
    );

    useEffect(() => {
        if (isOpen) window.addEventListener('click', closeSelectEvent);
        else window.removeEventListener('click', closeSelectEvent);

        if (titleRef.current && dropdownRef.current) {
            const { bottom, left } = titleRef.current.getBoundingClientRect();
            dropdownRef.current.style.top = `${bottom + 4}px`;
            dropdownRef.current.style.left = `${left}px`;
        }
    }, [isOpen, closeSelectEvent]);

    return (
        <div id={`${title}`} className={styles.select} ref={selectRef}>
            <div
                ref={titleRef}
                className={styles.selectTitle}
                onClick={isOpen ? closeModal : openModal}
            >
                {title}

                <div
                    className={`${styles.inputContainer} ${isOpen && styles.inputContainerActive}`}
                >
                    <input type="text" readOnly placeholder={placeholder} value={inputValue} />

                    <Image src={arrowImg} alt="Arrow" width={20} height={20} />
                </div>
            </div>

            {isOpen &&
                createPortal(
                    <SelectContext.Provider value={{ setInputValue, closeModal, action }}>
                        <div className={styles.selectDropdown} ref={dropdownRef}>
                            {children}
                        </div>
                    </SelectContext.Provider>,
                    document.body
                )}
        </div>
    );
};

Select.Item = function SelectItem({ title, value }: TSelectItem) {
    const { setInputValue, closeModal, action } = useContext(SelectContext);
    const dispatch = useDispatch();

    const itemOnClick = () => {
        dispatch(action({ value, title: value === '' ? value : title }));
        setInputValue(value === '' ? value : title);
        closeModal();
    };

    return (
        <div className={styles.selectItem} onClick={itemOnClick}>
            {title}
        </div>
    );
};

export default Select;
