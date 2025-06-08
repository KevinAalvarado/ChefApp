import React from 'react';
import { Home, ChefHat, Search, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import SubTitulo from '../components/SubTitulo';
import { useNavigate } from "react-router-dom";

const PageNotFound = ({ onNavigate }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">

        {/* Card principal con glassmorphism */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden">

          {/* Sección principal del error 404 */}
          <div className="text-center px-8 py-12">

            {/* Diseño creativo del número 404 */}
            <div className="relative mb-8">
              <div className="text-8xl md:text-9xl font-bold text-slate-200 select-none">
                404
              </div>

              {/* Icono del chef superpuesto en el "0" central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <ChefHat size={28} className="text-white" />
                </div>
              </div>
            </div>

            {/* Mensaje contextualizado para la aplicación */}
            <SubTitulo className="text-2xl font-bold text-slate-800 mb-4">
              ¡Receta No Encontrada!
            </SubTitulo>

            <p className="text-lg text-slate-600 mb-2 leading-relaxed">
              Parece que esta página se perdió en la cocina...
            </p>
            <p className="text-slate-500 mb-8">
              La página que buscas no existe o ha sido movida del recetario.
            </p>

            {/* Ilustración visual del problema */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-4 text-slate-400">
                <Search size={24} />
                <div className="flex-1 h-px bg-slate-300"></div>
                <span className="text-sm font-medium">Página perdida</span>
                <div className="flex-1 h-px bg-slate-300"></div>
                <ChefHat size={24} />
              </div>
              <p className="text-sm text-slate-500 mt-3">
                El Chef Ricardo está reorganizando su recetario digital
              </p>
            </div>

            {/* Botón de acción principal con animación */}
            <button
              onClick={() => navigate('/Home')}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <Home size={20} />
              Volver a la Cocina Principal
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Footer con sugerencias de acciones alternativas */}
          <div className="bg-slate-50 px-8 py-6 border-t border-slate-100">
            <h3 className="font-semibold text-slate-800 mb-3 text-center">
              ¿Qué puedes hacer mientras tanto?
            </h3>

            {/* Grid de sugerencias con iconos descriptivos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ChefHat size={16} className="text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-700">Explorar recetas</div>
                  <div className="text-xs text-slate-500">Descubre nuevos platillos</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search size={16} className="text-orange-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-700">Buscar ingredientes</div>
                  <div className="text-xs text-slate-500">Encuentra lo que necesitas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje de contacto adicional */}
        <div className="text-center mt-6">
          <p className="text-sm text-slate-500">
            Si el problema persiste, contacta al Chef Ricardo para reorganizar el menú
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;