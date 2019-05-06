export interface AppRoute {
  name: string;
  i18n: string;
}

export enum AppBarRoutes {
  home = 'home',
  about = 'about-us',
  events = 'events',
  blog = 'blog',
  who = 'who-did-this',
  contact = 'contact-us'
}

export const AppRoutes: AppRoute[] = [
  { name: '', i18n: 'links.home' },
  { name: AppBarRoutes.about, i18n: 'links.about' },
  { name: AppBarRoutes.events, i18n: 'links.events' },
  { name: AppBarRoutes.blog, i18n: 'links.blog' },
  { name: AppBarRoutes.contact, i18n: 'links.contact-us' }
];
