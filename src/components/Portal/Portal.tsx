import { createPortal } from 'react-dom';

export const Portal = ({ children }) => {
  const modal = document.getElementById('modal');

  if (!modal) {
    throw new Error("The element #modal wasn't found");
  }

  return createPortal(children, modal);
};
