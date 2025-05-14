import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold bg-secondary-gradient bg-clip-text text-fill mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" /> Go Back
          </Button>
          <Button className="flex items-center gap-2" asChild>
            <Link to="/dashboard">
              <Home className="h-4 w-4" /> Go to Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
