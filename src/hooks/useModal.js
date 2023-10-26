import {useState} from "react";

export const useModal = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return {show, handleShow, handleClose}
}