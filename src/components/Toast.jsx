// src/components/Toast.jsx
import { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Se oculta después de 3 segundos

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[60] animate-slideIn">
      <div className="bg-white rounded-lg shadow-2xl border-2 border-green-100 p-4 flex items-center gap-3 min-w-[300px]">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircle className="text-green-600" size={24} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-800">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Cerrar notificación"
        >
          <X size={18} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default Toast;