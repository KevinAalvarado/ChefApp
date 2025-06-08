import React from 'react';

const SubTitulo = ({ 
  children, 
  className = '', 
  variant = 'default',
  align = 'left',
  color = 'default' 
}) => {
  
  // Variantes de tamaño para subtítulos
  const variants = {
    default: 'text-xl md:text-2xl font-semibold',
    large: 'text-2xl md:text-3xl font-semibold',
    small: 'text-lg md:text-xl font-semibold',
    compact: 'text-base md:text-lg font-semibold'
  };

  // Sistema de colores temáticos
  const colors = {
    default: 'text-slate-700',
    muted: 'text-slate-600',
    orange: 'text-orange-600',
    green: 'text-green-600',
    dark: 'text-slate-800'
  };

  // Opciones de alineación
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <h2 
      className={`
        ${variants[variant]} 
        ${colors[color]}
        ${alignments[align]} 
        leading-snug tracking-tight
        ${className}
      `}
    >
      {children}
    </h2>
  );
};

export default SubTitulo;