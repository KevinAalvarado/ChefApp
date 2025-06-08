import { useEffect } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useFetchRecipe from "./useFetchRecipes";

const useDataRecipe = (methods) => {
  const { getRecipeById, getRecipes } = useFetchRecipe();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = methods;

  const navigate = useNavigate();

  const saveRecipeForm = async (dataForm) => {
    console.log("Datos a guardar:", dataForm);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        toast.error("Failed to add recipe");
        throw new Error("Failed to add recipe");
      }

      toast.success("Recipe saved successfully");
      navigate("/Home");
    } catch (error) {
      console.error("Error saving recipe:", error);
    } finally {
      reset();
      getRecipes();
    }
  };

  const editRecipe = async (dataForm) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        toast.error("Failed to update recipe");
        throw new Error("Failed to update recipe");
      }

      toast.success("Recipe updated successfully");
      navigate("/home");
    } catch (error) {
      console.error("Error updating recipe:", error);
      toast.error("Failed to update recipe");
    } finally {
      reset();
      getRecipes();
    }
  };

  const handleRecipeAction = (dataForm) => {
    if (id) {
      editRecipe(dataForm);
    } else {
      saveRecipeForm(dataForm);
    }
  };

  const handleUpdateRecipe = (id) => {
    navigate(`/Recipes/${id}`);
  };

  const loadRecipe = async () => {
  if (id) {
    const recipe = await getRecipeById(id);
    if (recipe) {
      reset({
        name: recipe.name || "",
        ingredients: recipe.ingredients || "",
        instructions: recipe.instructions || "",
        cookTime: recipe.cookTime?.toString() || "",
      });
    }
  }
};

  useEffect(() => {
    loadRecipe();
  }, [id]); 

  return {
    register,
    handleSubmit: handleSubmit(handleRecipeAction),
    errors,
    isSubmitting,
    getRecipeById,
    handleUpdateRecipe,
    loadRecipe,
    reset,
  };
};

export default useDataRecipe;
