import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Resume", href: "/resume", current: false },
  { name: "Projects", href: "/projects", current: false },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function NavBar() {
  return (
    <Disclosure as="nav" className="relative bg-navbarbgcolor rounded-full transition-shadow duration-300 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.8)]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-navbartextcolor hover:text-white hover:bg-navbarhovercolor focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-navbartextcolor hover:bg-navbarhovercolor hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Disclosure.Panel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as={Link}
              to={item.href}
              className="text-navbartextcolor hover:bg-navbarhovercolor hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
