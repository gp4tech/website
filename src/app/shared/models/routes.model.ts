export interface AppRoute {
  name: string;
  i18n: string;
}

export enum AppBarRoutes {
  home = 'home',
  about = 'about-us',
  donate = 'donations',
  events = 'activities',
  blog = 'blog',
  who = 'who-did-this',
  contact = 'contact-us',
  getInvolved = 'get-involved'
}

export const AppRoutes: AppRoute[] = [
  { name: '', i18n: 'links.home' },
  { name: AppBarRoutes.about, i18n: 'links.about' },
  { name: AppBarRoutes.events, i18n: 'links.events' },
  // TODO 06092019: Hidden for initial release
  // { name: AppBarRoutes.blog, i18n: 'links.blog' },
  { name: AppBarRoutes.contact, i18n: 'links.contact-us' }
];
