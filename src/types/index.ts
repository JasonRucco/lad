export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export interface NavItem {
  title: string;
  path: string;
}

export interface GalleryItem {
  GROUPID: string;
  files: string[];
}
