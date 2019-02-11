export enum AppBarViews {
    home = "home",
    about = "about-us",
    events = "events",
    blog = "blog",
    involved = "get-involved",
}

//TODO: seems that the name is not needed anymore???

export const VIEWS = [
    { name: AppBarViews.home, path: "/home", translated: 'links.home' },
    { name: AppBarViews.about, path: "/about-us", translated: 'links.about' },
    { name: AppBarViews.events, path: "/events", translated: 'links.events' },
    { name: AppBarViews.blog, path: "/blog", translated: 'links.blog' },
    { name: AppBarViews.involved, path: "/get-involved", translated: 'links.involved' }
]