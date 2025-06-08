import { Link } from "react-router-dom";
import Titulo from "../components/Titulo";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import useDataRecipe from "../hooks/recipes/useDataRecipes.jsx";
import { ArrowLeft, Save, ChefHat, Clock, List, FileText } from "lucide-react";

const Recipes = () => {
  // Configuración de react-hook-form para manejo del formulario
  const methods = useForm();

  // Custom hook que integra react-hook-form con la lógica de recetas
  const {
    register,
    handleSubmit,
    errors,
    reset
  } = useDataRecipe(methods);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        
        {/* Navegación de regreso con micro-animación */}
        <div className="mb-8">
          <Link
            to="/Home"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium mb-6 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Volver al Inicio
          </Link>

          {/* Header del formulario */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <ChefHat size={24} className="text-white" />
            </div>
            <Titulo className="text-3xl font-bold text-slate-800">
              Agregar Nueva Receta
            </Titulo>
          </div>
          <p className="text-slate-600">
            Completa los campos para guardar una nueva receta en tu colección.
          </p>
        </div>

        {/* Formulario principal con diseño en cards */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            
            {/* Header del formulario con información contextual */}
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-8 py-6 border-b border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                <FileText size={20} />
                Detalles de la Receta
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Todos los campos son obligatorios para crear una receta completa
              </p>
            </div>

            {/* Layout en grid responsive para organizar los campos */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Columna izquierda - Información básica */}
                <div className="space-y-6">
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <ChefHat size={18} />
                      Información Básica
                    </h3>
                    
                    <div className="space-y-4">
                      <InputText
                        type="text"
                        name="name"
                        label="Nombre del Platillo"
                        placeholder="Ej: Pupusas Revueltas"
                        register={register}
                        errors={errors}
                        required={true}
                      />
                      
                      <InputText
                        type="number"
                        name="cookTime"
                        label="Tiempo de Preparación"
                        placeholder="45"
                        register={register}
                        errors={errors}
                        required={true}
                      />
                    </div>
                  </div>
                </div>

                {/* Columna derecha - Detalles de preparación */}
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <List size={18} />
                      Preparación
                    </h3>
                    
                    <div className="space-y-4">
                      <InputText
                        name="ingredients"
                        label="Ingredientes"
                        placeholder="Ej: 2 tazas de masa, 1 lb de queso, frijoles refritos..."
                        register={register}
                        errors={errors}
                        required={true}
                      />
                      
                      <InputText
                        name="instructions"
                        label="Instrucciones"
                        placeholder="Paso 1: Preparar la masa... Paso 2: Agregar el relleno..."
                        register={register}
                        errors={errors}
                        required={true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección de consejos del Chef Ricardo */}
              <div className="mt-8 bg-orange-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <Clock size={18} />
                  Consejos del Chef Ricardo
                </h3>
                {/* Grid de consejos con indicadores visuales */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Describe los ingredientes con cantidades específicas</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Numera los pasos para mayor claridad</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Incluye tiempos de cocción y temperaturas</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Agrega consejos especiales o variaciones</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer con acciones del formulario */}
            <div className="bg-slate-50 px-8 py-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <p className="text-sm text-slate-600">
                Tu receta se guardará en la colección del Chef Ricardo
              </p>
              
              {/* Botones de acción con estilos diferenciados */}
              <div className="flex gap-3">
                <Link
                  to="/Home"
                  className="px-6 py-3 border border-slate-300 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors"
                >
                  Cancelar
                </Link>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Save size={18} />
                  Guardar Receta
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recipes;