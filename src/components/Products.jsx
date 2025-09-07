import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: "$2.50 / lb",
    image:
      "https://images.unsplash.com/photo-1636458938704-915d7e7bc021?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D",
    farmer: "Green Valley Farms",
  },
  {
    id: 2,
    name: "Organic Carrots",
    price: "$1.80 / lb",
    image:
      "https://images.unsplash.com/photo-1593726891090-b4c6bc09c819?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D",
    farmer: "Sunny Acres",
  },
  {
    id: 3,
    name: "Free Range Eggs",
    price: "$4.00 / dozen",
    image:
      "https://images.unsplash.com/photo-1613852348851-df1739db8201?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    farmer: "Happy Hens Farm",
  },
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: "$2.50 / lb",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    farmer: "Green Valley Farms",
  },
  {
    id: 2,
    name: "Organic Carrots",
    price: "$1.80 / lb",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    farmer: "Sunny Acres",
  },
  {
    id: 3,
    name: "Free Range Eggs",
    price: "$4.00 / dozen",
    image:
      "https://images.unsplash.com/photo-1636458938704-915d7e7bc021?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D",
    farmer: "Happy Hens Farm",
  },
  {
    id: 3,
    name: "Free Range Eggs",
    price: "$4.00 / dozen",
    image:
      "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D",
    farmer: "Happy Hens Farm",
  },
  {
    id: 3,
    name: "Free Range Eggs",
    price: "$4.00 / dozen",
    image:
      "https://plus.unsplash.com/premium_photo-1690340192770-3460a6c5067c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D",
    farmer: "Happy Hens Farm",
  },
];

const Products = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-8 mb-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 70, duration: 0.7, ease: "easeOut" }}
    >
      <div className="mb-14 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
          NEW PRODUCTS
        </h2>
        <p className="text-sm max-w-md mx-auto text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et maiores
          est doloremque tempore esse,
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden group"
          >
            <div className="w-full h-80 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-120 transition-all duration-300"
              />
            </div>

            <div className="px-4 py-2">
              <h3 className="text-lg font-bold text-gray-700">
                {product.name}
              </h3>
              <p className="text-gray-800 mt-2 text-sm font-bold">
                {product.price}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Farmer: <span className="font-medium">{product.farmer}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Products;
