import { IconType } from 'react-icons';
export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  color?: 'primary' | 'secondary' | 'black' | 'white';
  className?: string;
}
export interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  className?: string;
  icon?: IconType
  iconStatus: 'error' | 'success' | 'warning' | 'info';
}
export interface NoDataMessageProps {
  message?: string;
  className?: string;
}
export interface SearchState {
  query: string;
}
export interface SearchBarProps {
  placeholder?: string;
  className?: string;
  debounceTime?: number;
}
export interface SelectedState {
  selected: string;
}
export interface SidebarProps {
  width?: string;         
  height?: string;        
  className?: string;    
  showTitle?: boolean;    
  title?: string;         
}
export type Category = {
  category_id: string;
  name: string;
};
export interface NavBarProps {
  refresh: () => void;
}
export interface CoinCardProps {
  coin: any;
}
export interface DropdownProps {
  options: string[];
  onSelect: (value: string) => void;
}
export interface CoinState {
  coins: any[]; 
  selectedCoin: any | null;
}
export interface TopBoxProps {
  title: string;
  dropdownData: string[];
  onSelect: (value: string) => void;
}
export interface CoinsByCategory {
  selectedFilter: string;
}