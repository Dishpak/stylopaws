import { useState, useCallback } from 'react';

export const useToggle = (initValue) => {
  const [isToggled, setIsToggled] = useState(initValue);
  const toggle = useCallback(() => setIsToggled(!isToggled), [isToggled]);

  return [isToggled, toggle];
};
