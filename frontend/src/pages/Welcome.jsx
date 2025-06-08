import React, {useState} from 'react';
import { ChefHat, Plus, Home } from 'lucide-react';
import Button from '../components/Button';
import Titulo from '../components/Titulo';
import { useNavigate, useLocation } from 'react-router-dom';

const Welcome = () => {
  // Estado para controlar la visibilidad de la pantalla de bienvenida
  const [showWelcome, setShowWelcome] = useState(true);
  
  // Hook para navegación programática entre rutas
  const navigate = useNavigate();

  // Maneja la navegación al home principal
  const handleHomeClick = () => {
    setShowWelcome(false);
    navigate("/home");
  }


  return (
    // Container principal con fondo degradado y centrado completo
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        
        {/* Card principal con efecto glassmorphism */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden">
          
          {/* Header con gradiente naranja temático */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <ChefHat size={40} className="text-white" />
            </div>
            <Titulo className="text-3xl font-bold text-white mb-3">
              ¡Bienvenido a ChefApp!
            </Titulo>
            <p className="text-orange-100 text-lg leading-relaxed max-w-md mx-auto">
              El recetario digital del Chef Ricardo
            </p>
          </div>

          {/* Contenido principal */}
          <div className="px-8 py-8">
            <p className="text-slate-600 text-center mb-8 leading-relaxed">
              Descubre, organiza y comparte las mejores recetas de cocina. 
              Tu cocina digital donde la creatividad culinaria cobra vida.
            </p>
            
            {/* Botón de acción principal con micro-animaciones */}
            <div className="flex justify-center">
              <button 
                onClick={handleHomeClick}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Home size={20} />
                Comenzar mi aventura culinaria
              </button>
            </div>
          </div>

          {/* Footer decorativo */}
          <div className="bg-slate-50 px-8 py-4 border-t border-slate-100">
            <p className="text-center text-sm text-slate-500">
              Organiza tus recetas como un chef profesional
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;