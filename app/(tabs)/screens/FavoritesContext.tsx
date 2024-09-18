// FavoritesContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface FavoritesContextType {
  favoriteMeals: string[];
  toggleFavorite: (mealId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favoriteMeals: [],
  toggleFavorite: () => {},
});

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoriteMeals, setFavoriteMeals] = useState<string[]>([]);

  const toggleFavorite = (mealId: string) => {
    setFavoriteMeals((prevFavorites) => {
      if (prevFavorites.includes(mealId)) {
        return prevFavorites.filter(id => id !== mealId); // Xóa khỏi danh sách yêu thích
      } else {
        return [...prevFavorites, mealId]; // Thêm vào danh sách yêu thích
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favoriteMeals, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
