import CardExpertise from "./CardExpertise";
import {
  BoxIcon,
  ActivityIcon,
  LayoutDashboardIcon,
  ComputerIcon,
} from "lucide-react";

const data = [
  {
    title: "Strategy & Direction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: BoxIcon,
  },
  {
    title: "Branding & Logo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: ActivityIcon,
  },
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Webflow Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: ComputerIcon,
  },
];

const Expertise = () => {
  return (
    <section className="container m-auto px-4 py-16 md:py-24">
      <p className="font-semibold">My Skills</p>
      <p className="text-3xl font-semibold">My Expertise</p>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
        {data.map((expertise, index) => (
          <CardExpertise
            key={index}
            title={expertise.title}
            description={expertise.description}
            icon={expertise.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
