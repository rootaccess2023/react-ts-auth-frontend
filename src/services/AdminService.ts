import { User } from "../context/AuthContext";
import { showErrorToast } from "../utils/toast";

const API_URL = "http://localhost:3000/api";

class AdminService {
  // Get authentication token from local storage
  private getToken(): string | null {
    return localStorage.getItem("auth_token");
  }

  // Get all users (admin only)
  async getAllUsers(): Promise<User[]> {
    const token = this.getToken();

    if (!token) {
      showErrorToast("No authentication token found");
      throw new Error("No authentication token found");
    }

    try {
      const response = await fetch(`${API_URL}/admin/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.error || "Failed to fetch users";
        showErrorToast(errorMessage);
        throw new Error(errorMessage);
      }

      return response.json();
    } catch (error) {
      console.error("API Error:", error);
      showErrorToast(
        error instanceof Error ? error.message : "Network error occurred"
      );
      throw error;
    }
  }

  // Toggle admin status for a user
  async toggleAdminStatus(userId: number): Promise<User> {
    const token = this.getToken();

    if (!token) {
      showErrorToast("No authentication token found");
      throw new Error("No authentication token found");
    }

    try {
      const response = await fetch(
        `${API_URL}/admin/users/${userId}/toggle_admin`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.error || "Failed to update admin status";
        showErrorToast(errorMessage);
        throw new Error(errorMessage);
      }

      return response.json();
    } catch (error) {
      console.error("API Error:", error);
      showErrorToast(
        error instanceof Error ? error.message : "Network error occurred"
      );
      throw error;
    }
  }
}

export default new AdminService();
