import Link from "next/link";

export default function Navbar() {
  type path = { path: string };

  interface navType extends path {
    id: number;
    label: string;
  }
  
  const navigationLinks:navType[] = [
    {
      id: 1,
      label: "Home",
      path: "/",
    },
    {
      id: 2,
      label: "About",
      path: "/about",
    },
    {
      id: 3,
      label: "Why Solar",
      path: "/why-solar",
    },
    {
      id: 4,
      label: "Solutions & Products",
      path: "/solutions-products",
    },
    {
      id: 5,
      label: "Support & Service",
      path: "/support-service",
    },
    {
      id: 6,
      label: "Blog",
      path: "/blog",
    },
    {
      id: 7,
      label: "Clients",
      path: "/clients",
    },
  ];

  return (
    <div>
      <ol className="flex gap-4 justify-between items-center">
        {navigationLinks.map((item: navType) => (
          <li key={item.id}>
            <Link className="text-white" href={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
