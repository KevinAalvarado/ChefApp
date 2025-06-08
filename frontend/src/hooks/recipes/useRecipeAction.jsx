import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { url } from "../../utils/apiUrl";


const useRecipeActions = (getRecipes) => {
    const navigate = useNavigate();

    // Función para eliminar una receta por su id
    const deleteRecipe = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "DELETE",
            });
            
            if (response.ok) {
                toast.success("Receta eliminada exitosamente");
                console.log("Recipe deleted:", response);
                getRecipes(); // Recargar la lista de recetas
            } else {
                throw new Error("Error al eliminar la receta");
            }
        } catch (error) {
            console.error("Error deleting recipe:", error);
            toast.error("Error al eliminar la receta");
        }
    };

    // Función para crear una nueva receta
    const createRecipe = async (recipeData) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(recipeData),
            });

            if (response.ok) {
                const newRecipe = await response.json();
                toast.success("Receta creada exitosamente");
                getRecipes(); // Recargar la lista de recetas
                return newRecipe;
            } else {
                throw new Error("Error al crear la receta");
            }
        } catch (error) {
            console.error("Error creating recipe:", error);
            toast.error("Error al crear la receta");
            return null;
        }
    };

    // Función para actualizar una receta
    const updateRecipe = async (id, recipeData) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(recipeData),
            });

            if (response.ok) {
                const updatedRecipe = await response.json();
                toast.success("Receta actualizada exitosamente");
                getRecipes(); // Recargar la lista de recetas
                return updatedRecipe;
            } else {
                throw new Error("Error al actualizar la receta");
            }
        } catch (error) {
            console.error("Error updating recipe:", error);
            toast.error("Error al actualizar la receta");
            return null;
        }
    };

    // Función para manejar la edición de una receta
    const handleEditRecipe = (id) => {
        navigate(`/Recipes/${id}`);
    };

    return {
        deleteRecipe,
        createRecipe,
        updateRecipe,
        handleEditRecipe,
    };
};

export default useRecipeActions;