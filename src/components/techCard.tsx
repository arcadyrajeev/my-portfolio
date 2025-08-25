import React from "react";

interface TechProps {
  title: string;
  iconList: { iconLink: string; text: string }[];
}

const TechCard: React.FC<TechProps> = ({ title, iconList }) => {
  return (
    <div className="flex w-full h-fit justify-between items-center p-20 my-4">
      <div className="flex fontheading px-6 text-[6rem] w-[30vw] tracking-tighter leading-40 text-accent">
        {title}
      </div>
      <div className="grid grid-cols-5 gap-8">
        {iconList.map((icon) => (
          <div className="flex flex-col gap-4 items-center w-24 h-32 p-4">
            <img src={icon.iconLink} />
            <p className="text-primary-text text-center fontbody">
              {icon.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
