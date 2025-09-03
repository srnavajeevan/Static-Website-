
import { Page, Product, GalleryItem } from './types';

export const NAV_LINKS = [
  Page.Home,
  Page.FarmingTips,
  Page.Weather,
  Page.Marketplace,
  Page.Gallery,
  Page.Contact,
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Organic Fertilizer', category: 'Fertilizers', price: '$25.99', imageUrl: 'https://picsum.photos/seed/fertilizer/400/300' },
  { id: 2, name: 'Heirloom Tomato Seeds', category: 'Seeds', price: '$4.99', imageUrl: 'https://picsum.photos/seed/tomatoseeds/400/300' },
  { id: 3, name: 'Stainless Steel Trowel', category: 'Tools', price: '$15.50', imageUrl: 'https://picsum.photos/seed/trowel/400/300' },
  { id: 4, name: 'Fresh Organic Carrots', category: 'Crops', price: '$3.00/lb', imageUrl: 'https://picsum.photos/seed/carrots/400/300' },
  { id: 5, name: 'Drip Irrigation Kit', category: 'Irrigation', price: '$120.00', imageUrl: 'https://picsum.photos/seed/irrigation/400/300' },
  { id: 6, name: 'Protective Gloves', category: 'Tools', price: '$12.99', imageUrl: 'https://picsum.photos/seed/gloves/400/300' },
  { id: 7, name: 'Compost Mix', category: 'Soil', price: '$18.75', imageUrl: 'https://picsum.photos/seed/compost/400/300' },
  { id: 8, name: 'Sweet Corn Seeds', category: 'Seeds', price: '$5.50', imageUrl: 'https://picsum.photos/seed/cornseeds/400/300' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
    { id: 1, title: 'Sunrise Over the Cornfield', imageUrl: 'https://picsum.photos/seed/sunrise/600/400' },
    { id: 2, title: 'Harvesting Season', imageUrl: 'https://picsum.photos/seed/harvest/600/400' },
    { id: 3, title: 'Healthy Soil, Healthy Roots', imageUrl: 'https://picsum.photos/seed/soil/600/400' },
    { id: 4, title: 'Automated Irrigation System', imageUrl: 'https://picsum.photos/seed/drip/600/400' },
    { id: 5, title: 'The Beauty of Fresh Produce', imageUrl: 'https://picsum.photos/seed/produce/600/400' },
    { id: 6, title: 'Tractor at Work', imageUrl: 'https://picsum.photos/seed/tractor/600/400' },
];
