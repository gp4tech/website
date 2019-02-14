export interface AppView {
  name: string;
  i18n: string;
}

export enum AppBarViews {
  home = 'home',
  about = 'about-us',
  events = 'events',
  blog = 'blog',
  involved = 'get-involved'
}

export const VIEWS: AppView[] = [
  { name: '', i18n: 'links.home' },
  { name: AppBarViews.about, i18n: 'links.about' },
  { name: AppBarViews.events, i18n: 'links.events' },
  { name: AppBarViews.blog, i18n: 'links.blog' },
  { name: AppBarViews.involved, i18n: 'links.involved' }
];
