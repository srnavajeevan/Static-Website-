
export enum Page {
  Home = 'Home',
  FarmingTips = 'Farming Tips',
  Weather = 'Weather',
  Marketplace = 'Marketplace',
  Gallery = 'Gallery',
  Contact = 'Contact',
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
}

export interface FarmingTip {
  title: string;
  introduction: string;
  steps: string[];
}
