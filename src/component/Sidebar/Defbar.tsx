import { useState } from 'react';
import "tailwindcss";

interface SubItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href?: string;
  subItems?: SubItem[];
  icon?: string; // Tambahkan properti icon
}

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    href: "../App.tsx", // Ganti dengan path yang sesuai
    icon: "fa-solid fa-chart-line", // Contoh ikon Font Awesome
  },
  {
    label: "Messages",
    href: "/messages",
    icon: "fa-solid fa-message",
  },
  {
    label: "Deals Log",
    subItems: [
      { label: "My Requests", href: "/deals/requests" },
      { label: "My Shares", href: "/deals/shares" },
    ],
    icon: "fa-solid fa-file-contract",
  },
  {
    label: "Your Bookmarks",
    href: "/bookmarks",
    icon: "fa-solid fa-bookmark",
  },
];

const Defbar = () => {
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <aside className="bar w-64 bg-gray-100 p-4 flex flex-col h-screen top-0 fixed shadow-md"> {/* Tambahkan h-screen */}
      <div className="mb-8 flex items-center justify-center border-b border-gray-300"> {/* Center logo */}
        {/* Logo atau judul aplikasi */}
        <span className="text-2xl font-bold p-3">Regrant</span>
      </div>
      <ul className="flex-grow overflow-auto mt-5"> {/* Gunakan flex-grow untuk mengisi ruang */}
        {menuItems.map((item, index) => (
          <li key={index} className="mb-5"> {/* Kurangi margin bottom */}
            {item.subItems ? (
              <div>
                <button
                  onClick={() => toggleSubmenu(item.label)}
                  className="butt flex items-center p-0 px-0 py-0 w-full text-left text-blue-500 hover:bg-gray-200 rounded-lg transition" // Button full width
                >
                  <i className={`${item.icon} mr-2`}></i> {/* Ikon */}
                  {item.label}
                  <i className={`fas fa-chevron-down ml-auto transition-transform ${openSubmenus[item.label] ? 'rotate-180' : ''}`}></i> {/* Ikon dropdown */}
                </button>
                {openSubmenus[item.label] && (
                  <ul className="ml-15 mt-4">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="mb-3">
                        <a href={subItem.href} className="block"> {/* Link block */}
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a href={item.href} className="flex items-center">
                <i className={`${item.icon} mr-2`}></i> {/* Ikon */}
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-auto border-t pt-4"> {/* Footer di bagian bawah */}
        <div className="flex items-center">
          <img src="avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
          <span>Spidervape</span>
        </div>
      </div>
    </aside>
  );
};

export default Defbar;