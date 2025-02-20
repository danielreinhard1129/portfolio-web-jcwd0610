import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import { ToggleDarkMode } from "./ToggleDarkMode";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="container m-auto p-4">
      <div className="flex items-center justify-between">
        <Image src="/logo.png" alt="logo" width={187} height={40} />

        <div className="hidden items-center gap-4 md:flex">
          <p>Home</p>
          <p>Portfolio</p>
          <p>About me</p>
          <p>Testimonials</p>
          <ToggleDarkMode />
        </div>

        <Button
          variant="outline"
          className="hidden border-purple-500 text-purple-500 md:block"
        >
          Contact Me
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger className="block md:hidden">
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>Portfolio</DropdownMenuItem>
            <DropdownMenuItem>About me</DropdownMenuItem>
            <DropdownMenuItem>Testimonials</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
