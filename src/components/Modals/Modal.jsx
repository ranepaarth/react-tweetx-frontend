import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleShowModal,
} from "../../features/slice/tweetsSlice";
import { toggleShowUserModal } from "../../features/slice/usersSlice";

const Modal = ({ showModal, children, isTweet }) => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const handleOverlayClick = (e) => {
    // console.log("clicked", modalRef.current === e.target);
    if (modalRef.current === e.target && isTweet) {
      dispatch(toggleShowModal());
    } else if (modalRef.current === e.target && !isTweet) {
      dispatch(toggleShowUserModal());
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("click", handleOverlayClick);
    }

    return () => {
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [showModal]);

  return (
    <div
      className={`z-20 fixed grid place-items-center bg-black/40 w-full inset-0 ${
        showModal ? "block" : "hidden"
      }`}
      ref={modalRef}
    >
      {children}
    </div>
  );
};

export default Modal;
