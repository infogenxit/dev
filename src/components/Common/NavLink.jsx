import { NavLink as RouterNavLink } from "react-router-dom";
import { PATHS } from "../../route/paths";

/**
 * NavLink - wrapper that resolves a key from PATHS to the actual URL.
 * If the key does not exist, it falls back to the supplied string (useful for external links).
 */
export const NavLink = ({ toKey, children, ...rest }) => (
  <RouterNavLink to={PATHS[toKey] ?? toKey} {...rest}>
    {children}
  </RouterNavLink>
);
