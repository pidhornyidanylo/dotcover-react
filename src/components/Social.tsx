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

type SocialProps = {
  color: "white" | "black";
};

const Social: React.FC<SocialProps> = ({ color }: SocialProps) => {
  return (
    <div className="absolute right-8 top-8">
      <ul className="flex list-none flex-col gap-3">
        {socialArray.map((socialItem) => (
          <li key={socialItem.name}>
            <a>
              <img
                style={{
                  filter:
                    color === "black" ? "invert(1) hue-rotate(180deg)" : "",
                }}
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
