"use client";

import Image from "next/image";
import { useMemo } from "react";

export type Food = {
  name: string;
  image_url: string;
  price: number;
  orders: number;
};
export type Orderable = { orders: number };

const foods: Food[] = [
  {
    name: "Fresh Salad Bowl",
    image_url: "/foods/salad-bowl.avif",
    price: 45,
    orders: 120,
  },
  {
    name: "Chicken Noodles",
    image_url: "/foods/chicken-noodles.jpeg",
    price: 75,
    orders: 100,
  },
  {
    name: "Smoothie Fruits",
    image_url: "/foods/smoothie-fruits.avif",
    price: 45,
    orders: 90,
  },
  {
    name: "Hot Chicken Wings",
    image_url: "/foods/hot-chicken-wings.avif",
    price: 55,
    orders: 280,
  },
  {
    name: "Beef Burger",
    image_url: "/foods/beef-burger.avif",
    price: 65,
    orders: 70,
  },
  {
    name: "Fried Rice",
    image_url: "/foods/fried-rice.avif",
    price: 50,
    orders: 60,
  },
  {
    name: "Grilled Salmon",
    image_url: "/foods/grilled-salmon.avif",
    price: 85,
    orders: 50,
  },
  {
    name: "Spaghetti Bolognese",
    image_url: "/foods/spaghetti-bolognese.avif",
    price: 70,
    orders: 400,
  },
];

export default function MostOrderedFoodsList() {
  const sortedFoods = useMemo(() => insertionSort(foods).slice(0, 4), []);

  return (
    <div className="bg-white rounded-lg">
      <div className="w-full p-6">
        <div className="font-bold text-lg mb-2">Most Ordered Food</div>
        <div className="text-gray-600 mb-6 opacity-50">
          Adipiscing elit, sed do eiusmod tempor
        </div>
        {sortedFoods.map((food, index) => (
          <div
            key={index}
            className={`flex items-center mb-6 last:mb-0 ${
              index < sortedFoods.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <div className="flex-none w-10 h-10 relative mr-3">
              <Image
                src={food.image_url}
                alt={food.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="flex-grow font-medium">{food.name}</div>
            <div className="flex-none text-gray-900">
              {formatPrice(food.price)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function insertionSort<T extends Orderable>(arr: T[]): T[] {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && arr[j].orders < current.orders) {
      // Sorting in descending order
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

export function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}
