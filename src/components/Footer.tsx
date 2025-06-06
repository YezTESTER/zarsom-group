
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "ZARFUEL", path: "/zarfuel" },
    { name: "News", path: "/news" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
    { name: "Terms of Use", path: "/terms" },
    { name: "Login", path: "https://dashboard.zarsomgroup.co.za", external: true }
  ];

  return (
    <footer className="bg-zarsom-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img
              alt="ZARSOM Group Logo"
              className="h-16 mb-4"
              src="/lovable-uploads/8968f7bd-c9f7-4537-aa72-c9a93c3a2b33.png"
            />
            <p className="text-gray-300 mb-4">Fueling Progress. Nourishing Communities.</p>
            <p className="text-gray-300 mb-4">
              A <a href="http://www.whitepaperconcepts.co.za/" target="_blank" rel="noopener noreferrer" className="text-zarsom-teal hover:underline">White Paper Concepts</a> Design
            </p>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-zarsom-teal text-zarsom-teal hover:bg-zarsom-teal hover:text-white"
                asChild
              >
                <a
                  href="https://www.linkedin.com/company/zarsom-group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-zarsom-teal transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-300 hover:text-zarsom-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@zarsomgroup.co.za</p>
              <p>Phone: +27 79 582 5550 / +27 79 654 2968</p>
              <p>Address: 53 Aquileia Ave, Widenham, Umkomaas, 4170</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ZARSOM Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
