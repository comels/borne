import { useState } from "react";
import Nav from "../components/Nav";

const Pages = ({ src, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <Nav />
      <div className=" h-screen w-screen">
        {isLoading && (
          <div className="h-screen bg-white">
            <div className="flex h-full flex-col items-center justify-center gap-5">
              <img
                className="h-16 w-16"
                src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                alt="spinner chargement"
              />
              <h1 className="text-2xl font-medium">
                Chargement en cours, merci de patienter...
              </h1>
            </div>
          </div>
        )}
        <iframe
          src={src}
          title={title}
          frameBorder="0"
          style={{ width: "100%", height: "100%", border: "none" }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default Pages;
