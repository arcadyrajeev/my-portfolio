import React from "react";

interface TechProps {
  title: string;
  iconList: { iconLink: string; text: string }[];
}

const TechCard: React.FC<TechProps> = ({ title, iconList }) => {
  return (
    <div className="flex py-10 lg:py-30 flex-col items-center md:items-start md:flex-row w-full h-fit items-center lg:my-4">
      <div className="flex h-30 lg:h-full items-center w-full  md:w-[40%] justify-center md:justify-start text-light px-8 fontCta text-[2.4rem] md:text-[10vw] lg:text-[8vw] tracking-tighter xl:leading-36 text-accent">
        {title}
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-8 lg:pl-10">
        {iconList.map((icon) => (
          <div className="flex flex-col gap-1 md:gap-4 items-center w-18  h-24 lg:w-24 lg:h-32 p-4">
            <img src={icon.iconLink} />
            <p className="text-primary-text text-[2.6vw] md:text-[1.8vw] lg:text-[1.2vw] text-center fontbody">
              {icon.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
