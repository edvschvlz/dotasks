import './Modal.css';

const Modal = ({ show, setShowModal, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="button_close">
          <i type="button" className="bi bi-x-lg" onClick={() => setShowModal(false)}></i>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Modal;
