import MenuItemChildren from './MenuItemChildren';

export default interface MenuItem {
  title: string;
  icon: string;
  children: MenuItemChildren[];
  to?: string;
}
