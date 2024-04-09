import Link from "next/link";

export default function SubMenu({ subMenuItems }: { subMenuItems?: any }) {
  if (!subMenuItems || subMenuItems.length === 0) return null;
  return (
    <div className="absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
        {subMenuItems.map((menuItem: any, index: number) => (
          <li key={index}>
            {menuItem.link.startsWith("http") ? (
              <Link
                href={menuItem.link}
                target="_blank"
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
              >
                {menuItem.label}
              </Link>
            ) : (
              <Link
                href={menuItem.link}
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
              >
                {menuItem.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
