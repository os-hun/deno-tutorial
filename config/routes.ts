import { Home } from '../pages/home.ts';
import { About } from '../pages/about.ts';

export interface RoutesType {
  path: string;
  action: any;
}

export const routes: RoutesType[] = [
  {
    path: '/',
    action: Home,
  },
  {
    path: '/about',
    action: About,
  }
];
