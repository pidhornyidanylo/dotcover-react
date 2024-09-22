import React from "react";

const socialArray = [
  {
    name: "behance",
    url: "./assets/icons/Behance.svg",
  },
  {
    name: "pinterest",
    url: "./assets/icons/Pinterest.svg",
  },
  {
    name: "instagram",
    url: "./assets/icons/instagram.svg",
  },
  {
    name: "linkedin",
    url: "./assets/icons/Linkedin.svg",
  },
  {
    name: "dribble",
    url: "./assets/icons/dribbble.svg",
  },
];

const Social = () => {
  return (
    <div className="absolute top-8 right-8">
      <ul className="list-none flex flex-col gap-3">
        {socialArray.map((socialItem) => (
          <li key={socialItem.name}>
            <a href="#">
              <img
                className="transition-all hover:scale-125"
                src={socialItem.url}
                alt={socialItem.name}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
