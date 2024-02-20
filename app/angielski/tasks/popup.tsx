// Popup.tsx

import React, { useEffect, useState } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const gifs = ["win.gif", "loss.gif", "mid.gif", "win.gif", "loss.gif", "mid.gif", "win.gif", "loss.gif", "mid.gif", "win.gif"]
  const [id, setId] = useState<any>(0);
  const [wynik, setWynik] = useState<any>(0);
  useEffect(() => {
    const val = Number(localStorage.getItem("exam_result"));
    setWynik(Math.round(val));
    setId(Math.floor(val / 10));
  }) 
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-white p-8 rounded shadow-lg z-10">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-4">Congrats you got  {wynik}%</h2>
          <img src={`/image/${gifs[id]}`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
