import { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CustomModal02: React.FC<ModalProps | any> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', closeOnEscapeKeyDown);

        return () => {
            document.removeEventListener('keydown', closeOnEscapeKeyDown);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
            <div className="relative bg-white p-8 rounded-lg w-full max-w-xl">
                <button
                    className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-600"
                    onClick={onClose}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default CustomModal02;
