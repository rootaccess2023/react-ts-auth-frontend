import { FiBox } from "react-icons/fi";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-6">
          <div className="h-14 w-14 rounded-md bg-black mx-auto flex items-center justify-center mb-4">
            <FiBox className="text-white text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Sign in to your account
          </h2>
          <p className="mt-2 text-gray-600">
            Enter your credentials to access your dashboard
          </p>
        </div>

        <div className="mt-8">
          <LoginForm />
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            By signing in, you agree to our{" "}
            <a href="#" className="font-medium text-gray-900 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-gray-900 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
