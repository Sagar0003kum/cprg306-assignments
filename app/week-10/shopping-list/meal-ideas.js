"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await res.json();
    return data.meals || [];
  } catch (err) {
    console.error("Error fetching meals:", err);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function load() {
      if (!ingredient) return;
      const ideas = await fetchMealIdeas(ingredient);
      setMeals(ideas);
    }
    load();
  }, [ingredient]);

  return (
    <div className="text-white p-4 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4">
        Meal Ideas for <strong>{ingredient || "…"}</strong>
      </h2>

      <ul className="space-y-4">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="bg-slate-800 p-3 rounded-xl hover:bg-slate-700 transition"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <p className="text-center font-medium">{meal.strMeal}</p>
          </li>
        ))}

        {!meals.length && ingredient && (
          <p className="text-slate-400">No meal ideas found.</p>
        )}
      </ul>
    </div>
  );
}
