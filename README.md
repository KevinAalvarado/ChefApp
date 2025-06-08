# 👨‍🍳 ChefApp - Administrador de Recetas de Cocina

**El recetario digital del Chef Ricardo**

Aplicación web desarrollada con React.js que permite gestionar recetas de cocina de manera eficiente. El Chef Ricardo puede registrar, editar, eliminar y visualizar sus recetas con ingredientes, instrucciones y tiempos de preparación.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-CDN-38B2AC?style=flat&logo=tailwind-css)

## 🛠 Tecnologías Utilizadas

- **React 19.1.0** - Framework principal
- **Vite 6.3.5** - Build tool y servidor de desarrollo
- **React Router DOM 7.6.2** - Navegación entre páginas
- **React Hook Form 7.57.0** - Manejo y validación de formularios
- **React Hot Toast 2.5.2** - Notificaciones al usuario
- **Tailwind CSS (CDN)** - Estilos y diseño responsive
- **Lucide React 0.513.0** - Iconografía
- **Fetch API** - Consumo de API REST

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Button.jsx     # Botón con variantes
│   │   ├── Card.jsx       # Tarjeta de receta
│   │   ├── InputText.jsx  # Input con validación
│   │   ├── Titulo.jsx     # Títulos principales
│   │   └── SubTitulo.jsx  # Subtítulos
│   ├── hooks/             # Custom hooks
│   │   └── recipes/
│   │       ├── useFetchRecipes.jsx   # Obtener datos
│   │       ├── useDataRecipes.jsx    # Manejo formularios
│   │       └── useRecipeAction.jsx   # Acciones CRUD
│   ├── pages/             # Páginas principales
│   │   ├── Welcome.jsx    # Pantalla de bienvenida
│   │   ├── Home.jsx       # Dashboard principal
│   │   ├── Recipes.jsx    # Formulario de recetas
│   │   └── PageNotFound.jsx # Error 404
│   └── utils/
│       └── apiUrl.jsx     # URL de la API
├── package.json           # Dependencias
└── README.md             # Este archivo
```

## 🚀 Instalación y Ejecución

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación estará en `http://localhost:5173`

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 🔗 API Utilizada

**Endpoint:** `https://retoolapi.dev/DBFXqn/recetas`

**Estructura de datos:**
```json
{
  "id": 1,
  "name": "Pupusas Revueltas",
  "ingredients": "2 tazas de masa, 1 lb de queso...",
  "instructions": "Paso 1: Preparar la masa...",
  "cookTime": 45
}
```

## ⚡ Funcionalidades CRUD

- **✅ CREATE:** Agregar nuevas recetas con formulario validado
- **📖 READ:** Visualizar recetas en grid responsive con cards
- **✏️ UPDATE:** Editar recetas existentes pre-poblando el formulario
- **🗑️ DELETE:** Eliminar recetas con confirmación y notificación

## 🎨 Características

### **Páginas Implementadas:**
- **Welcome (`/`):** Pantalla de bienvenida con navegación al dashboard
- **Home (`/Home`):** Dashboard principal con grid de recetas
- **Recipes (`/Recipes`):** Formulario para crear/editar recetas
- **404 (`/*`):** Página de error personalizada

### **Componentes Reutilizables:**
- **Button:** Múltiples variantes (primary, secondary, outline, danger)
- **InputText:** Validación integrada con react-hook-form
- **Card:** Muestra información de recetas con acciones
- **Titulo/SubTitulo:** Tipografía consistente

### **Custom Hooks:**
- **useFetchRecipes:** Obtención y cache de recetas
- **useDataRecipe:** Lógica de formularios y validación
- **useRecipeAction:** Acciones CRUD (crear, editar, eliminar)

### **Diseño:**
- **Responsive:** Adaptable a móviles, tablets y escritorio
- **Paleta:** Naranjas (tema culinario), verdes (éxito), grises (neutrales)
- **UX:** Notificaciones toast, micro-animaciones, estados de loading

## 📱 Uso de la Aplicación

1. **Pantalla de Bienvenida:** Introducción temática con botón para acceder
2. **Dashboard:** Visualización de recetas en cards con contadores dinámicos
3. **Crear/Editar:** Formulario organizado por secciones con validación
4. **Gestión:** Botones de editar/eliminar en cada receta
