import { NavLinks } from "src/components/navLinks";

export function FooterNav() {
  return (
    <div>
      <div className="w-full h-14 px-6 flex items-center bg-white text-gray-900 text-xs border-t bottom-0 fixed lg:invisible dark:bg-gray-600 dark:border-gray-500 dark:text-white">
        <NavLinks />
      </div>
    </div>
  );
}
