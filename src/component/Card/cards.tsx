import React from 'react';

interface Item {
    label: string;
    location: string;
    imageUrl: string;
  }
  
  const items: Item[] = [
    { label: 'Bor mini', location: 'Jakarta', imageUrl: 'assets/images/bor-mini.jpg' },
    { label: 'Solder', location: 'Bogor', imageUrl: 'assets/images/solder.jpg' },
    { label: 'Laptop stand', location: 'Depok', imageUrl: 'assets/images/laptop-stand.jpg' },
    { label: 'Gergaji tangan', location: 'Tangerang', imageUrl: 'assets/images/gergaji-tangan.jpg' },
    { label: 'Spidervape', location: 'Bekasi', imageUrl: 'assets/images/spidervape.jpg' },
  ];

  const cards = () =>{
    return(
        <div className="item-list grid grid-cols-4 gap-6">
            {items.map((item, index) => (
            <div key={index} className="border rounded-md shadow-sm relative">
                <img src={item.imageUrl} alt={item.label} className="w-full h-48 object-cover rounded-t-md" />
                <div className="p-4">
                <p className="font-bold text-lg mb-1">{item.label}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded-md mt-2 absolute bottom-4 right-4">
                    Borrow
                </button>
                </div>
            </div>
            ))}
        </div>
    )
}

export default cards;