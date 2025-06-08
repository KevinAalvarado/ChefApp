import React from "react";
import Card from "../components/Card";
import Titulo from "../components/Titulo";
import Button from "../components/Button";
import { Plus, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import useFetchRecipes from "../hooks/recipes/useFetchRecipes";
import useRecipeActions from "../hooks/recipes/useRecipeAction";

const Home = () => {
  // Custom hooks para manejar el estado y acciones de las recetas
  const { recipes, getRecipes } = useFetchRecipes();
  const { deleteRecipe, handleEditRecipe } = useRecipeActions(getRecipes);

  return (
    // Container principal con fondo degradado
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header con información y acción principal */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <ChefHat size={24} className="text-white" />
              </div>
              <div>
                <Titulo className="text-3xl font-bold text-slate-800">
                  Recetario del Chef Ricardo
                </Titulo>
                {/* Contador dinámico de recetas */}
                <p className="text-slate-600 mt-1">
                  {recipes?.length || 0} recetas en tu colección
                </p>
              </div>
            </div>
            
            {/* Botón CTA para nueva receta */}
            <Link
              to="/Recipes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Plus size={20} />
              Nueva Receta
            </Link>
          </div>
        </div>

        {/* Renderizado condicional: estado vacío vs grid de cards */}
        {!recipes || recipes.length === 0 ? (
          // Estado vacío con mensaje motivacional
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-12 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ChefHat size={32} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              ¡Comienza tu colección de recetas!
            </h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              No tienes recetas registradas aún. Agrega tu primera receta y comienza a construir tu recetario digital.
            </p>
            <Link
              to="/Recipes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Plus size={20} />
              Agregar Primera Receta
            </Link>
          </div>
        ) : (
          // Grid responsive de cards para mostrar recetas
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mapeo de recetas usando componente Card */}
            {recipes.map((recipe) => (
              <Card
                key={recipe.id}
                recipe={recipe}
                onEdit={handleEditRecipe}
                onDelete={deleteRecipe}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;