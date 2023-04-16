const Modal = ({isVisible, onClose, children}) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if( e.target.id === 'wrapper' ) onClose();
    }


    return(
        <>
            <div className="fixed inset-0 pt-20 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" >
                <div className="w-[600px] flex flex-col">
                    <button className="text-white text-xl place-self-end bg-black rounded-full w-7" onClick={() => onClose()}>X</button>
                    <div className="bg-blue-500 p-2 rounded-md">{children}</div>
                </div>
            </div>
        </>
    );
}
export default Modal;