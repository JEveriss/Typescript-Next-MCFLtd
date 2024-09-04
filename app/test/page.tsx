"use client";

import { useState } from "react";
import styles from "./test.module.css";
import Modal from "../components/modal/modal";
import PoprtfolioModal from "../portfolio/portfolioModal";

export default function Dashboard() {
  const [showModal, setShowModal] = useState<boolean>(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Modal open={showModal} onClose={toggleModal}>
        <PoprtfolioModal />
      </Modal>

      <div className={styles.card}>
        <a type="button" className={styles.btn} onClick={toggleModal}>
          Open
        </a>
      </div>
    </>
  );
}
