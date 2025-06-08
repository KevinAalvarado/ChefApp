const Button = ({
  type = "button",
  onClick,
  text,
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  ...props
}) => {

  // Configuración de variantes de color y estilo
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white bg-white",
    ghost: "text-slate-600 hover:text-slate-800 hover:bg-slate-100",
    danger: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl",
    success: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl"
  };

  // Configuración de tamaños responsive
  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  // Clases base comunes para todos los botones
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

  // Manejo del estado disabled
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed transform-none hover:transform-none" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      {...props}
    >
      {/* Flexibilidad para contenido: children tiene prioridad sobre text */}
      {children || text}
    </button>
  );
};

export default Button;