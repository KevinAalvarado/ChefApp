import Button from "./Button";
import { Edit3, Trash2, Clock } from "lucide-react";

const Card = ({ recipe, onEdit, onDelete }) => (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 flex flex-col gap-4">
        <div>
            <h3 className="text-xl font-bold text-orange-700 mb-2">{recipe.name}</h3>
            <div className="text-slate-600 text-sm mb-1">
                <span className="font-semibold">Ingredientes:</span> {recipe.ingredients}
            </div>
            <div className="text-slate-600 text-sm mb-1">
                <span className="font-semibold">Instrucciones:</span> {recipe.instructions}
            </div>
            <div className="flex items-center gap-2 text-orange-600 font-medium mt-2">
                <Clock size={16} />
                {recipe.cookTime} min
            </div>
        </div>
        <div className="flex gap-2 mt-2">
            <Button
                variant="primary"
                size="small"
                onClick={() => onEdit(recipe.id)}
            >
                <Edit3 size={16} /> Editar
            </Button>
            <Button
                variant="danger"
                size="small"
                onClick={() => onDelete(recipe.id)}
            >
                <Trash2 size={16} /> Eliminar
            </Button>
        </div>
    </div>
);

export default Card;