
import { Laptop, Smartphone, Camera, Monitor, Shield, Network, Headphones, Gamepad2, Server, HardDrive, Printer, Speaker, Router, Projector, Recycle, Cpu } from 'lucide-react';
import React from 'react';

export interface AcceptedItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  aiHint: string;
}

export const acceptedItems: AcceptedItem[] = [
  {
    icon: React.createElement(Laptop),
    title: 'accepted_item_1_title',
    description: 'accepted_item_1_desc',
    image: 'https://content-provider.payshia.com/eco-fleix/categories/computer-waste-optimized.webp',
    aiHint: 'laptops computers',
  },
  {
    icon: React.createElement(Smartphone),
    title: 'accepted_item_2_title',
    description: 'accepted_item_2_desc',
    image: 'https://content-provider.payshia.com/eco-fleix/categories/mobile-phone.webp',
    aiHint: 'smartphones tablets',
  },
  {
    icon: React.createElement(Camera),
    title: 'accepted_item_3_title',
    description: 'accepted_item_3_desc',
    image: 'https://content-provider.payshia.com/eco-fleix/what-we-collect/camera-optimized.webp',
    aiHint: 'digital cameras',
  },
  {
    icon: React.createElement(Monitor),
    title: 'accepted_item_4_title',
    description: 'accepted_item_4_desc',
    image: 'https://content-provider.payshia.com/eco-fleix/what-we-collect/monitor-optimized.webp',
    aiHint: 'monitors televisions',
  },
  {
    icon: React.createElement(Shield),
    title: 'accepted_item_5_title',
    description: 'accepted_item_5_desc',
    image: 'https://content-provider.payshia.com/eco-fleix/what-we-collect/cctv-optimized.webp',
    aiHint: 'security cameras',
  },
  {
    icon: React.createElement(Network),
    title: 'accepted_item_6_title',
    description: 'accepted_item_6_desc',
    image: 'https://content-provider.payshia.com/eco-fleix/what-we-collect/network-optimized.webp',
    aiHint: 'network routers',
  },
  {
    icon: React.createElement(Headphones),
    title: 'accepted_item_7_title',
    description: 'accepted_item_7_desc',
    image: 'https://content-provider.payshia.com/eco-fleix/what-we-collect/sound-optimized.webp',
    aiHint: 'audio equipment',
  },
  {
    icon: React.createElement(Gamepad2),
    title: 'accepted_item_8_title',
    description: 'accepted_item_8_desc',
    image: 'https://content-provider.payshia.com/eco-fleix/what-we-collect/game-optimized.webp',
    aiHint: 'gaming consoles',
  },
  {
    icon: React.createElement(Gamepad2),
    title: 'Gaming Desktop',
    description: 'High-performance gaming desktops and components.',
    image: 'https://picsum.photos/seed/gd/600/400',
    aiHint: 'gaming desktop',
  },
  {
    icon: React.createElement(Monitor),
    title: 'Normal Desktops',
    description: 'Standard desktop computers for home or office use.',
    image: 'https://picsum.photos/seed/nd/600/400',
    aiHint: 'office computer',
  },
  {
    icon: React.createElement(Server),
    title: 'Networking Server',
    description: 'Servers and other networking infrastructure.',
    image: 'https://picsum.photos/seed/ns/600/400',
    aiHint: 'network server',
  },
  {
    icon: React.createElement(Network),
    title: 'Networking Switch',
    description: 'Network switches of all sizes.',
    image: 'https://picsum.photos/seed/nsw/600/400',
    aiHint: 'network switch',
  },
  {
    icon: React.createElement(Printer),
    title: 'HP Laser Printer',
    description: 'All models of HP laser printers.',
    image: 'https://picsum.photos/seed/hplp/600/400',
    aiHint: 'laser printer',
  },
  {
    icon: React.createElement(HardDrive),
    title: 'Hard Drive, SSD/HDD',
    description: 'Internal and external hard drives, including SSDs and HDDs.',
    image: 'https://picsum.photos/seed/hdd/600/400',
    aiHint: 'hard drives',
  },
  {
    icon: React.createElement(Cpu),
    title: 'Motherboards',
    description: 'Computer motherboards and other internal components.',
    image: 'https://picsum.photos/seed/mb/600/400',
    aiHint: 'computer motherboard',
  },
  {
    icon: React.createElement(Speaker),
    title: 'Music Speakers',
    description: 'Speakers and audio systems.',
    image: 'https://picsum.photos/seed/ms/600/400',
    aiHint: 'audio speakers',
  },
  {
    icon: React.createElement(Gamepad2),
    title: 'Gaming Consoles (PS1-PS5)',
    description: 'All generations of PlayStation and other gaming consoles.',
    image: 'https://picsum.photos/seed/ps/600/400',
    aiHint: 'playstation consoles',
  },
  {
    icon: React.createElement(Printer),
    title: 'HP Toners',
    description: 'Used and unused HP toner cartridges.',
    image: 'https://picsum.photos/seed/hpt/600/400',
    aiHint: 'printer toner',
  },
  {
    icon: React.createElement(Router),
    title: 'Routers',
    description: 'Wireless and wired internet routers.',
    image: 'https://picsum.photos/seed/rtr/600/400',
    aiHint: 'internet router',
  },
  {
    icon: React.createElement(Projector),
    title: 'Projectors',
    description: 'Digital and office projectors.',
    image: 'https://picsum.photos/seed/proj/600/400',
    aiHint: 'office projector',
  },
  {
    icon: React.createElement(Recycle),
    title: 'E Waste & E Scrap Buyers',
    description: 'We purchase bulk e-waste and electronic scrap.',
    image: 'https://picsum.photos/seed/ews/600/400',
    aiHint: 'e-waste pile',
  },
   {
    icon: React.createElement(Recycle),
    title: 'Recycling Service',
    description: 'Comprehensive recycling services for all electronics.',
    image: 'https://picsum.photos/seed/rs/600/400',
    aiHint: 'recycling symbol',
  },
];
