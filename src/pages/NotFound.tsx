
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zarsom-navy to-zarsom-navy/80 text-white">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold mb-6 text-zarsom-teal">404</h1>
        <p className="text-2xl text-gray-300 mb-8">Oops! Page not found</p>
        <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="hero-button bg-zarsom-teal text-white hover:bg-zarsom-teal/80">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
