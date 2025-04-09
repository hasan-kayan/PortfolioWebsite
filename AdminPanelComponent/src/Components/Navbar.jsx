import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-appbgcolor cursor-none">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 cursor-none">
        <div className="flex h-14 items-center justify-center">
          {/* Navigation links */}
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  location.pathname === item.href
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white",
                  "px-4 py-2 rounded-md text-sm transition duration-200 cursor-none"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Separator Line */}
      <div className="border-b border-white/20" />
    </nav>
  );
}
