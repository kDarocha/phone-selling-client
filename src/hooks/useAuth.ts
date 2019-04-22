import { useEffect, useState } from 'react';

/**
 * Helpers imports
 */
import Auth from 'Helpers/Auth';

export function useAuth() {
  const auth = new Auth();

  return [ auth.loggedIn(), auth.logout ];
}
