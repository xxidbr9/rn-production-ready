import React from 'react'
import { useColorScheme } from 'react-native';

const useIsDark = (): boolean => {
  return useColorScheme() === 'dark';
}

export default useIsDark