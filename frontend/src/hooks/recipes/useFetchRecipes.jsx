import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { url } from "../../utils/apiUrl";

const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const getRecipes = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error fetching recipes");
            }
            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
            toast.error("Error loading recipes");
        } finally {
            setLoading(false);
        }
    };

    // Function to get a recipe by its id
    const getRecipeById = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`);
            if (!response.ok) {
                console.log("Failed to fetch recipe");
                throw new Error("Failed to fetch recipe");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching recipe:", error);
            console.log("Failed to fetch recipe");
            return null;
        }
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return {
        recipes,
        getRecipeById,
        getRecipes,
        loading
    };
};

export default useFetchRecipes;