import React from 'react';
import { Home, Info, MoreHorizontal } from 'lucide-react-native';

type TabIconProps = {
  color: string;
  size?: number;
  focused?: boolean;
};

export const HomeIcon = ({ color, size = 24 }: TabIconProps) => (
  <Home size={size} color={color} />
);

export const AboutIcon = ({ color, size = 24 }: TabIconProps) => (
  <Info size={size} color={color} />
);

export const MoreIcon = ({ color, size = 24 }: TabIconProps) => (
  <MoreHorizontal size={size} color={color} />
);

