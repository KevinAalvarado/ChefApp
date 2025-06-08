import React from 'react';
import { AlertCircle } from 'lucide-react';

const InputText = ({
  label,
  placeholder,
  type = 'text',
  required = false,
  className = '',
  register,
  name,
  errors,
  helpText,
  disabled = false,
  ...props
}) => {
  
  // Verificación de errores para cambios visuales condicionales
  const hasError = errors && errors[name];
  
  return (
    <div className={`space-y-2 ${className}`}>
      
      {/* Label con indicador de campo requerido */}
      {label && (
        <label className="block text-sm font-semibold text-slate-700">
          {label} 
          {required && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </label>
      )}

      {/* Container del input con posicionamiento relativo para iconos */}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`
            w-full px-4 py-3 text-slate-800 placeholder-slate-400 
            bg-white border-2 rounded-xl 
            transition-all duration-200 
            focus:outline-none focus:ring-4 
            disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50
            ${hasError 
              ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
              : 'border-slate-200 focus:border-orange-400 focus:ring-orange-500/20 hover:border-slate-300'
            }
            ${type === 'textarea' ? 'min-h-[120px] resize-vertical' : ''}
          `}
          {...(register ? register(name) : {})}
          {...props}
        />
        
        {/* Icono de error posicionado absolutamente */}
        {hasError && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <AlertCircle size={20} className="text-red-400" />
          </div>
        )}
      </div>

      {/* Texto de ayuda cuando no hay errores */}
      {helpText && !hasError && (
        <p className="text-sm text-slate-500 flex items-start gap-1">
          <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
          {helpText}
        </p>
      )}
      
      {/* Mensaje de error con diseño destacado */}
      {hasError && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg border border-red-200">
          <AlertCircle size={16} className="flex-shrink-0" />
          <span>{errors[name].message}</span>
        </div>
      )}
    </div>
  );
};

export default InputText;