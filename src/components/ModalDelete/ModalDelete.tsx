'use client';
import React, { FC, useRef } from 'react';
import styles from './ModalDelete.module.scss';
import closeImg from '../../../public/close.svg';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { removeFromCart } from '@/redux/cartSlice';
import { useModal } from '@/hooks/useModal';

interface IModalDelete {
    id: string;
    alternativeSwitch?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDelete: FC<IModalDelete> = ({ id, alternativeSwitch }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const { isOpen, openModal, closeModal, approve } = useModal(
        modalRef,
        removeFromCart(id),
        alternativeSwitch
    );

    return (
        <>
            {!alternativeSwitch && (
                <Image
                    className={styles.deleteImg}
                    src={closeImg}
                    alt="Delete"
                    width={20}
                    height={20}
                    onClick={openModal}
                />
            )}
            {isOpen &&
                createPortal(
                    <div ref={modalRef} className={styles.modal}>
                        <div className={styles.modalContent}>
                            <div className={styles.topContainer}>
                                <div className={styles.title}>
                                    Удаление билета
                                    <Image
                                        onClick={closeModal}
                                        className={styles.closeImg}
                                        src={closeImg}
                                        alt="Close"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                                Вы уверены, что хотите удалить билет?
                            </div>

                            <div className={styles.bottomContainer}>
                                <button onClick={approve} className={styles.yesButton}>
                                    Да
                                </button>

                                <button onClick={closeModal} className={styles.noButton}>
                                    Нет
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default ModalDelete;
