import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { showErrorToast } from "../../utils/toast";

const AdminRoute: React.FC = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated and is an admin
    if (!authState.loading) {
      if (!authState.isAuthenticated) {
        // Not authenticated, redirect to login
        showErrorToast("Please login to continue");
        navigate("/login", { replace: true });
      } else if (!authState.user?.admin) {
        // Authenticated but not an admin, redirect to user dashboard
        showErrorToast("Admin access required");
        navigate("/dashboard", { replace: true });
      }
    }
  }, [authState.isAuthenticated, authState.loading, authState.user, navigate]);

  // Show loading state while checking authentication/admin status
  if (authState.loading) {
    return <div>Loading...</div>;
  }

  // Only render the outlet if authenticated and is admin
  return authState.isAuthenticated && authState.user?.admin ? <Outlet /> : null;
};

export default AdminRoute;
