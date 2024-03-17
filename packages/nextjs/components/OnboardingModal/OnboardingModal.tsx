"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./OnboardingModal.css";
import { LenderRoles, Role } from "~~/data/data";

const OnboardingModalProfile = (props: Role) => {
  const { name, actions, image } = props;
  const onClick = (value: string) => {
    localStorage.setItem("role", value);
    const modal = document.getElementById("Lender__modal") as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };
  return (
    <div className="avatar  Lender__Profile" onClick={() => onClick(name)}>
      <div className="w-24 rounded-full m-auto">
        <Image src={image} alt="icon" width={200} height={200} />
      </div>
      <small>{name}</small>
      <small>Actions:{actions}</small>
    </div>
  );
};

const OnboardingModal = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (showModal) {
      const modal = document.getElementById("Lender__modal") as HTMLDialogElement;
      if (modal) {
        modal.showModal();
      }
    }
  }, []);

  return (
    <dialog id="Lender__modal" className="modal Lender__OnboardingModal">
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setShowModal(false)}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg text-center">Select your profile!</h3>
        <div className="modal-content text-center">
          {LenderRoles.map((role, key) => (
            <OnboardingModalProfile key={key} {...role} />
          ))}
        </div>
        <div className="modal-footer text-center mt-3">
          <a className="font-bold underline "> or click here to full access</a>
        </div>
      </div>
    </dialog>
  );
};

export default OnboardingModal;
