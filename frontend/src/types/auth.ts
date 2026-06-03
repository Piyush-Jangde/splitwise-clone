export interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string | null;
  authProvider?: "EMAIL_PASSWORD" | "GOOGLE";
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user: User;
  token: string;
}