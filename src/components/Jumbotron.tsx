import Image from "next/image";
import { Button } from "./ui/button";
import { geistMono, poppins } from "@/assets/fonts";

const Jumbotron = () => {
  return (
    <section className="bg-[#F5FCFF] px-4 py-16 dark:bg-transparent md:py-24">
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* KOLOM 1 */}
          <div className="flex items-center">
            <div className="motion-preset-slide-right motion-duration-2000 space-y-4">
              <p className={`${poppins.className} font-semibold`}>
                Hey, I am Daniel
              </p>

              <p className="text-4xl font-semibold md:text-5xl">
                I create{" "}
                <span className="text-[#5E3BEE]">
                  product design <br />
                </span>{" "}
                and brand experience
              </p>

              <p className={`${geistMono.className}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Suspendisse varius enim in eros elementum tristique.
              </p>

              <Button className="bg-[#5E3BEE]">Get In Touch</Button>
            </div>
          </div>

          {/* KOLOM 2 */}
          <div>
            <div className="motion-preset-slide-left motion-duration-2000 relative h-[320px] w-full md:h-[500px]">
              <Image
                src="/person1.png"
                alt="person-profile-picture"
                objectFit="contain"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
