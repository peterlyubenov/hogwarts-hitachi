import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found - Hogwarts Houses");
  return (
    <Layout>
      <div className="flex justify-center items-center h-full">
        <div className="text-center">
          <h1 className="text-white font-bold text-7xl">404</h1>
          <div className="text-white">
            <h2 className="text-4xl">Page not found</h2>
            <p className="text-xl">
              The page you are looking for does not exist or has been moved.
            </p>
          </div>
          <Link
            to="/"
            className="text-primary hover:text-primaryHover transition-all ml-4 text-xl"
          >
            Back to the home page
          </Link>
        </div>
      </div>
    </Layout>
  );
};
