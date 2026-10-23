export interface NavItem {
  label: string;
  /** Route path without the base path, e.g. "/explore". */
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'Collections', href: '/collections' },
  { label: 'Outings', href: '/outings' },
  { label: 'Profile', href: '/profile' },
];
