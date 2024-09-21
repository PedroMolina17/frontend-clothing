"use client";
import { Product } from "../../types/product";
import Image from "next/image";
import { ImCross } from "react-icons/im";

const Traitor = () => {
  const traitors = [
    {
      image: "/carlos-condori.png",
      price: "S/0",
      name: "Carlos El Loco Condori",
      die: false,
    },
    {
      image: "/franchesco-somontes.png",
      price: "S/1.000.000",
      name: "Franchesco El venado de Gabriela Somontes",
      die: true,
    },
    {
      image: "/joseph-gutierrez.png",
      price: "S/∞",
      name: "Joseph Barbilla Roja Gutierrez",
      die: false,
    },
    {
      image: "/henry-abanto.png",
      price: "S/1",
      name: "Henry El Otaku Abanto",
      die: false,
    },
    {
      image: "/cristhy-becerra.png",
      price: "S/1000",
      name: "Cristhy Resentida Becerra",
      die: false,
    },
    {
      image: "/alvaro-neira.png",
      price: "-S/10,000",
      name: "Alvaro Neira",
      die: false,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Traidores</h1>
      <p className="text-gray-500">
        Estas personas son traidores, no los contraten si los ve en Linkedin
      </p>
      <div className="grid grid-cols-2 gap-4 py-8 max-md:grid-cols-1">
        {traitors.map((traitor, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border w-96 relative"
          >
            <div className="flex flex-col items-center w-96 gap-4">
              <Image
                src={traitor.image}
                alt={traitor.name}
                width={150}
                height={150}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="text-lg font-bold">{traitor.name}</p>
                <div className="flex flex-col">
                  <p className="text-gray-500 font-bold">Recompensa:</p>
                  <p className="text-gray-500">{traitor.price}</p>
                </div>
              </div>
              {traitor.die && (
                <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 ">
                  <p className="text-[300px] font-extrabold text-red-500 opacity-40">
                    <ImCross />
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
        <p className="text-gray-500">
          Las recompensa se dara en monedas venezolanas
        </p>
      </div>
    </div>
  );
};

export default Traitor;
