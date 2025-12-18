import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_STORAGE_KEY = '@app_auth';

const VALID_USERNAME = 'umar';
const VALID_PASSWORD = '1122';

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  username: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const authData = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
      if (authData) {
        const { isLoggedIn, username: storedUsername } = JSON.parse(authData);
        setIsAuthenticated(isLoggedIn);
        setUsername(storedUsername);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (inputUsername: string, inputPassword: string): Promise<{ success: boolean; error?: string }> => {
    if (inputUsername === VALID_USERNAME && inputPassword === VALID_PASSWORD) {
      try {
        await AsyncStorage.setItem(
          AUTH_STORAGE_KEY,
          JSON.stringify({ isLoggedIn: true, username: inputUsername })
        );
        setIsAuthenticated(true);
        setUsername(inputUsername);
        return { success: true };
      } catch (error) {
        console.error('Error saving auth state:', error);
        return { success: false, error: 'Failed to save login state' };
      }
    }
    return { success: false, error: 'Invalid username or password' };
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
      setIsAuthenticated(false);
      setUsername(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

