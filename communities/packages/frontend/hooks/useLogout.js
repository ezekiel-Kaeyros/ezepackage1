import { useEffect } from 'react';
import Keycloak from 'keycloak-js';

const useKeycloakLogout = () => {
  useEffect(() => {
    const keycloak = Keycloak(); // Initialize Keycloak instance

    const logout = async () => {
      try {
        await keycloak.init(); // Initialize Keycloak
        await keycloak.logout(); // Logout the user
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    logout(); // Call the logout function when the component mounts

    // Clean up function
    return () => {
      keycloak.logout(); // Ensure logout when the component unmounts
    };
  }, []);

  return null; // This hook doesn't render anything
};

export default useKeycloakLogout;
