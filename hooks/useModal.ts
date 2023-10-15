import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useModal = (
    modalRef: React.RefObject<HTMLDivElement>,
    approveF?: any,
    alternativeSwitch?: React.Dispatch<React.SetStateAction<boolean>>,
    overflow = true
) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(!!alternativeSwitch);

    const openModal = useCallback(() => {
        setIsOpen(true);
        if (overflow) document.body.style.overflow = 'hidden';
    }, [overflow]);

    const closeModal = useCallback(() => {
        alternativeSwitch ? alternativeSwitch(false) : setIsOpen(false);
        document.body.style.overflow = 'auto';
    }, [alternativeSwitch]);

    const approve = useCallback(() => {
        dispatch(approveF);
        document.body.style.overflow = 'auto';
    }, [dispatch, approveF]);

    const closeModalEvent = useCallback(
        (e: MouseEvent) => {
            if (e.target === modalRef.current) closeModal();
        },
        [closeModal, modalRef]
    );

    useEffect(() => {
        if (isOpen) window.addEventListener('click', closeModalEvent);
        else window.removeEventListener('click', closeModalEvent);
    }, [closeModalEvent, isOpen]);

    return { isOpen, openModal, closeModal, approve };
};
