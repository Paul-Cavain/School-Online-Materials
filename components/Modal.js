const Modal = ({isVisible, onClose, children}) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if( e.target.id === 'wrapper' ) onClose();
    }


    return(
        <>
            <div className="fixed inset-0 pt-20 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" >
                <div className="w-[600px] md:px-0 px-10 flex flex-col">
                    <button className="absolute text-black font-normal text-xl place-self-end bg-white rounded-full w-7 m-2" onClick={() => onClose()}>X</button>
                    <div className="bg-indigo-600 p-2 rounded-md">{children}</div>
                </div>
            </div>
        </>
    );
}
export default Modal;