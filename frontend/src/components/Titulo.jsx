import React from 'react';

const Titulo = ({ 
  children, 
  className = '', 
  variant = 'default',
  align = 'left',
  gradient = false 
}) => {
  
  // Sistema de variantes para diferentes tamaños de título
  const variants = {
    default: 'text-3xl md:text-4xl font-bold text-slate-800',
    large: 'text-4xl md:text-5xl font-bold text-slate-800',
    hero: 'text-5xl md:text-6xl font-bold text-slate-800',
    compact: 'text-2xl md:text-3xl font-bold text-slate-800'
  };

  // Opciones de alineación de texto
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  // Gradiente opcional para títulos destacados
  const gradientClasses = gradient 
    ? 'bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent' 
    : '';

  return (
    <h1 
      className={`
        ${variants[variant]} 
        ${alignments[align]} 
        ${gradientClasses}
        leading-tight tracking-tight
        ${className}
      `}
    >
      {children}
    </h1>
  );
};

export default Titulo;