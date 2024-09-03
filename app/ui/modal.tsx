"use client"

import { useRouter } from "next/navigation";

type ModalProps = {
  children?: React.ReactNode;
};

export default function Modal(props: ModalProps) {
  const router = useRouter();

  return (
    <div
      style={{
        height: "80vh",
        width: "500",
        backgroundColor: "#ee6699",
        placeContent: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "8rem" }}>THIS IS THE MODAL</h1>
      {props.children}
      <button
        onClick={() => {
          router.back();
        }}
      >
        Close modal
      </button>
    </div>
  );
}
