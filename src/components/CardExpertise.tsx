import { FC } from "react";

interface CardExpertiseProps {
  title: string;
  description: string;
  icon: any;
}

const CardExpertise: FC<CardExpertiseProps> = ({
  title,
  description,
  icon: Icon, // rename props
}) => {
  return (
    <div className="motion-preset-expand motion-duration-1500 space-y-4 rounded-md bg-[#F5FCFF] p-6 dark:bg-secondary">
      <div className="flex w-fit items-center justify-center rounded-lg bg-white p-2 dark:text-black">
        <Icon />
      </div>
      <p className="text-xl font-semibold">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default CardExpertise;
