import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import { Portal } from './components/Portal';
import './style.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowMessageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='App'>
      <div className='Content'>
        <h1>My App</h1>
        <p>
          This is an example of how you might use React.createPortal. I think it
          is a pretty neat API that is yet another awesome escape hatch that
          React provides for practical reasons. Sometimes you just need to
          render something completely outside the React Tree.
        </p>
        <button onClick={handleShowMessageClick}>Show Secret Modal</button>
        {showModal ? (
          <Portal>
            <Modal onClose={handleCloseModal} />
          </Portal>
        ) : null}
      </div>
    </div>
  );
};

export default App;
