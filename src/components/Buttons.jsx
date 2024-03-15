import { NavLink } from "react-router-dom";

const Button = () => {
  // Listes des démarches
  const actions = [
    {
      title: "Démarches administratives",
      bgcolor: "bg-sky-600",
      demarches: [
        { title: "Déclarer ses impôts", href: "/declare-impots" },
        { title: "Demande de procuration", href: "/demande-procuration" },
      ],
    },
    {
      title: "Démarches 2",
      href: "#",
      bgcolor: "bg-orange-500",
      demarches: [{ title: "Démarche 1", href: "#" }],
    },
    {
      title: "Démarches 3",
      href: "#",
      bgcolor: "bg-teal-500",
      demarches: [{ title: "Démarche 1", href: "#" }],
    },
    {
      title: "Démarches 4",
      href: "#",
      bgcolor: "bg-yellow-500",
      demarches: [{ title: "Démarche 1", href: "#" }],
    },
  ];

  // Affichage des démarches
  return (
    <div className="grid h-screen grid-cols-2 gap-3 rounded-lg p-5">
      {actions.map((action, index) => (
        <div
          key={index}
          className={`${action.bgcolor} flex flex-col overflow-auto rounded-lg px-10`}
        >
          <h1 className="mx-auto my-7 text-3xl font-semibold text-white">
            {action.title}
          </h1>

          <div className="mx-auto grid w-full grid-cols-2 gap-4">
            {action.demarches.map((demarche, index) => (
              <NavLink
                key={index}
                to={demarche.href}
                className="rounded-lg bg-white px-5 py-3 font-medium text-gray-800 hover:bg-slate-200"
              >
                {demarche.title}
              </NavLink>
            ))}
          </div>
          <div className="pt-10"></div>
        </div>
      ))}
    </div>
  );
};

export default Button;
