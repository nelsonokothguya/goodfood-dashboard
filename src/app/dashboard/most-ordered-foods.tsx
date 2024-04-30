import Image from "next/image";
export type Food = {
  name: string;
  image_url: string;
  price: number;
};


export default function MostOrderedFoodsList() {
  const foods = [
    {
      name: "Fresh Salad Bowl",
      image_url: "/foods/salad-bowl.avif",
      price: 45,
    },
    {
      name: "Chicken Noodles",
      image_url: "/foods/chicken-noodles.jpeg",
      price: 75,
    },
    {
      name: "Smoothie Fruits",
      image_url: "/foods/smoothie-fruits.avif",
      price: 45,
    },
    {
      name: "Hot Chicken Wings",
      image_url: "/foods/hot-chicken-wings.avif",
      price: 45,
    },
  ];

  const formatPrice = (price: number) => {
    return `IDR ${price.toFixed(3)}`;
  };
  const borderClass = (index: number) => {
    return index < foods.length - 1 ? "border-b border-gray-200" : "";
  };

  return (
    <div className="bg-white p-12 rounded-lg ">
      <div className="w-full">
        <div className="font-bold text-lg mb-1">Most Ordered Food</div>
        <div className="text-gray-600 mb-6 opacity-50">
          Adipiscing elit, sed do eiusmod tempor
        </div>
        {foods.map((food, index) => (
          <div
            key={index}
            className={`flex items-center mb-4 last:mb-0 ${borderClass(index)}`}
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
