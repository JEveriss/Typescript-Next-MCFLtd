import styles from "./modal.module.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  return (
    <div
      className={`${styles.modal} ${
        props.open ? styles.display : styles.displayNone
      }`}
    >
      <div className={styles.modal__Main}>
        <div className={styles.modal__Head}>

          <button type="button" className={styles.modal__Button} onClick={props.onClose}>
            X
          </button>
        </div>

        <div className={styles.modal__Body}>{props.children}</div>
      </div>
    </div>
  );
}
