import { deleteTweetHandler } from "../../utils/helper/DeleteTweetHelper";
import Span from "../Span/Span";
import Button from "../Button/Button";

function Modal({ setOpenModal, idTweet }) {
    let closeModalAndDeleteHandler = (idTweet) => {
        deleteTweetHandler(idTweet);
        setOpenModal(false);
    }

    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-container__modal-header">
                    <Span contentOfSpan="Confirmar" />
                    <Button
                        buttonClass="modal-container__modal-header__close-btn"
                        onClickEvent={() => setOpenModal(false)}
                        enableAnimation={true}
                    >
                        <Span contentOfSpan="X" />
                    </Button>
                </div>
                <div className="modal-container__modal-body">
                    <Span contentOfSpan="¿Está seguro de elminar Tweet?" />
                </div>
                <div className="modal-container__modal-footer">
                    <Button
                        buttonClass="modal-container__modal-footer__cancel-btn"
                        onClickEvent={() => setOpenModal(false)}
                        enableAnimation={true}
                    >
                        <Span contentOfSpan="Cancelar" />
                    </Button>
                    <Button
                        buttonClass="modal-container__modal-footer__confirm-btn"
                        onClickEvent={() => closeModalAndDeleteHandler(idTweet)}
                        enableAnimation={true}
                    >
                        <Span contentOfSpan="Confirmar" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;