import { categories } from '../data/categories';

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="w-full bg-white shadow-soft rounded-soft p-6 mb-8">
      <h3 className="text-lg font-serif text-gray-800 mb-4">Categorías</h3>
      
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              px-6 py-3 rounded-soft font-sans text-sm font-medium
              transition-all duration-300 flex items-center gap-2
              ${activeCategory === category.id
                ? 'bg-primary-200 text-gray-800 shadow-soft scale-105'
                : 'bg-white border-2 border-primary-100 text-gray-600 hover:border-primary-200 hover:bg-primary-50'
              }
            `}
            style={activeCategory === category.id ? {
              backgroundColor: category.color + '30',
              borderColor: category.color
            } : {}}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Descripción de categoría activa */}
      {activeCategory !== 'all' && (
        <div className="mt-4 pt-4 border-t border-primary-100">
          <p className="text-sm text-gray-600 italic">
            {categories.find(c => c.id === activeCategory)?.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;