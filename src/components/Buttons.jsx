import { NavLink } from "react-router-dom";

const Button = () => {
  const actions = [
    {
      title: "Démarches administratives",
      bgcolor: "bg-sky-600",
      demarches: [
        { title: "Déclarer ses impôts", href: "/declare-impots" },
        { title: "Demande de procuration", href: "/demande-procuration" },
        { title: "Demande de visa", href: "/demande-de-visa" },
        { title: "Demande de passeport", href: "/demande-de-passeport" },
        {
          title: "Demande de carte d'identité",
          href: "demande-de-carte-identite",
        },
        { title: "Demande de carte grise", href: "demande-de-carte-grise" },
        {
          title: "Demande de permis de conduire",
          href: "demande-de-permis-de-conduire",
        },
        {
          title: "Demande de casier judiciaire",
          href: "demande-de-casier-judiciaire",
        },
      ],
    },
    {
      title: "Titre 2",
      href: "#",
      bgcolor: "bg-orange-500",
      demarches: [
        { title: "Démarche 1", href: "#" },
        { title: "Démarche 2", href: "#" },
        { title: "Démarche 3", href: "#" },
        { title: "Démarche 4", href: "#" },
        { title: "Démarche 5", href: "#" },
        { title: "Démarche 6", href: "#" },
        { title: "Démarche 6", href: "#" },
        { title: "Démarche 6", href: "#" },
      ],
    },
    {
      title: "Titre 3",
      href: "#",
      bgcolor: "bg-teal-500",
      demarches: [
        { title: "Démarche 1", href: "#" },
        { title: "Démarche 2", href: "#" },
        { title: "Démarche 3", href: "#" },
        { title: "Démarche 4", href: "#" },
        { title: "Démarche 5", href: "#" },
        { title: "Démarche 5", href: "#" },
        { title: "Démarche 5", href: "#" },
        { title: "Démarche 5", href: "#" },
      ],
    },
    {
      title: "Titre 4",
      href: "#",
      bgcolor: "bg-yellow-500",
      demarches: [
        { title: "Démarche 1", href: "#" },
        { title: "Démarche 2", href: "#" },
        { title: "Démarche 3", href: "#" },
        { title: "Démarche 4", href: "#" },
        { title: "Démarche 5", href: "#" },
        { title: "Démarche 6", href: "#" },
        { title: "Démarche 6", href: "#" },
        { title: "Démarche 6", href: "#" },
      ],
    },
  ];
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
