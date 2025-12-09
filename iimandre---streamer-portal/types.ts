import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon | ((props: any) => ReactNode);
  color: string;
  description: string;
  highlight?: boolean;
}