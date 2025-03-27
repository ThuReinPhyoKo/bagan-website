import { FC } from "react";

interface ModalProps {
    image: string,
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({image, onClose}) => {
    return(
        <>
            <div className="w-full h-screen fixed flex items-center justify-center top-0 left-0 bg-black bg-opacity-80 z-50">
                <div className="relative">
                    <button className="absolute top-2 right-2 bg-black bg-opacity-50 w-10 h-10 rounded-full text-white text-lg font-mono" onClick={onClose}>X</button>
                    <img src={image} alt="selected" className="max-w-full max-h-[90vh] rounded-lg shadow-md" />
                </div>
            </div>
        </>
    )
}

export default Modal;