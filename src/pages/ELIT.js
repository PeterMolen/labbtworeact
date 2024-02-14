import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ background: 'black', padding: 20, borderRadius: 5, border: 'solid', borderColor: 'white' }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default function ELIT() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keyCodeBuffer, setKeyCodeBuffer] = useState([]);

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const newBuffer = [...keyCodeBuffer, event.keyCode];
      if (newBuffer.length > 4) {
        newBuffer.shift(); 
      }
      setKeyCodeBuffer(newBuffer);

      const secretCode = [49, 51, 51, 55]; // 1337 in ASCII key codes
      if (newBuffer.join(',') === secretCode.join(',')) {
        setIsModalOpen(true);
        setKeyCodeBuffer([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyCodeBuffer]);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>This is the 1337 modal page</h2>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 style={{ animation: 'loading 4s infinite', color: 'white' }}>😊🕵️‍♂️Detta är ett Hemligt meddelande!🕵️‍♂️😊</h2>
      </Modal>
    </div>
  );
}