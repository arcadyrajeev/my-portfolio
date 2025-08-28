import React from "react";

interface TechProps {
  title: string;
  iconList: { iconLink: string; text: string }[];
}

const TechCard: React.FC<TechProps> = ({ title, iconList }) => {
  return (
    <div className="flex bg-red-200 flex-col items-center md:items-start md:flex-row w-full h-fit items-center md:my-4">
      <div className="flex w-full md:w-[40%] justify-center md:justify-start px-8 fontheading  text-[2rem] md:text-[10vw]  tracking-tighter leading-40 text-accent">
        {title}
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-8">
        {iconList.map((icon) => (
          <div className="flex flex-col gap-1 md:gap-4 items-center w-15  h-20 md:w-24 md:h-32 p-4">
            <img src={icon.iconLink} />
            <p className="text-primary-text text-[1.2vw] text-center fontbody">
              {icon.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
