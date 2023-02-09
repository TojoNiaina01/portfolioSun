export enum SelectedPage {
  Home = "home",
  About = "about",
  Portfolio = "portfolio",
  Services = "services",
  Works = "works",
  ContactUs = "contactus",
}

export interface Details {
  icon: JSX.Element;
  title: string;
  description: string;
}
