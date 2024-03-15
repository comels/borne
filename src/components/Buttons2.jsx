const Button2 = () => {
  // Listes des démarches
  const actions = [
    {
      title: "Démarches administratives",
      bgcolor: "bg-sky-600",
      demarches: [
        {
          title: "Ma sécurité",
          href: "https://www.masecurite.interieur.gouv.fr/fr",
        },
        {
          title: "Je m'informe",
          href: "https://www.masecurite.interieur.gouv.fr/fr/m-orienter",
        },
      ],
    },
    {
      title: "Démarches 2",
      href: "#",
      bgcolor: "bg-orange-500",
      demarches: [
        {
          title: "THESEE - Plainte pour escroqueries",
          href: "https://www.service-public.fr/particuliers/vosdroits/N31138",
        },
      ],
    },
    {
      title: "Démarches 3",
      href: "#",
      bgcolor: "bg-teal-500",
      demarches: [
        {
          title: "Opération tranquillité vacances",
          href: "https://www.service-public.fr/particuliers/vosdroits/R43241",
        },
      ],
    },
    {
      title: "Démarches 4",
      href: "#",
      bgcolor: "bg-yellow-500",
      demarches: [
        { title: "Ma procuration", href: "https://www.maprocuration.gouv.fr/" },
      ],
    },
  ];

  // Affichage des démarches
  return (
    <div className="grid h-screen grid-cols-2 gap-5 rounded-lg p-5">
      {actions.map((action, index) => (
        <div
          key={index}
          className={`${action.bgcolor} flex flex-col justify-center overflow-auto rounded-lg px-10`}
        >
          <div className="flex w-full items-center justify-center gap-4">
            {action.demarches.map((demarche, index) => (
              <a
                key={index}
                href={demarche.href}
                className="rounded-lg bg-white px-5 py-8 text-2xl font-medium text-gray-800 hover:bg-slate-200"
              >
                {demarche.title}
              </a>
            ))}
          </div>
          <div className="pt-10"></div>
        </div>
      ))}
    </div>
  );
};

export default Button2;
