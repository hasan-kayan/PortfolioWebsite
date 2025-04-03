import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
    <Disclosure as="nav" className="bg-appbgcolor cursor-none">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 cursor-none">
        <div className="relative flex h-14 items-center justify-center">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden cursor-none">
            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <Bars3Icon className="block h-5 w-5" aria-hidden="true" />
              <XMarkIcon className="hidden h-5 w-5" aria-hidden="true" />
            </Disclosure.Button>
          </div>

          {/* Centered Navigation */}
          <div className="flex flex-1 justify-center">
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
      </div>

      {/* Bottom Separator Line */}
      <div className="border-b border-white/20" />
      
      {/* Mobile Menu */}
      <Disclosure.Panel className="sm:hidden bg-appbgcolor">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as={Link}
              to={item.href}
              className={classNames(
                location.pathname === item.href
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white",
                "block px-3 py-2 rounded-md text-base font-medium transition duration-200 cursor-none"
              )}
              aria-current={location.pathname === item.href ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
