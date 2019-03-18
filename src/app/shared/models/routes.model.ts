export interface AppRoute {
  name: string;
  i18n: string;
}

export enum AppBarRoutes {
  home = 'home',
  about = 'about-us',
  events = 'events',
  blog = 'blog',
  involved = 'get-involved'
}

export const APP_ROUTES: AppRoute[] = [
  { name: '', i18n: 'links.home' },
  { name: AppBarRoutes.about, i18n: 'links.about' },
  { name: AppBarRoutes.events, i18n: 'links.events' },
  { name: AppBarRoutes.blog, i18n: 'links.blog' },
  { name: AppBarRoutes.involved, i18n: 'links.involved' }
];
