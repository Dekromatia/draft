import { useEffect, useState } from 'react';

const useKeyboardNavigation = (items, onSelect) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 38) { // up arrow
        e.preventDefault();
        if (selectedIndex === null) {
          setSelectedIndex(items.length - 1);
        } else {
          setSelectedIndex(prevSelectedIndex => {
            const newIndex = prevSelectedIndex - 1;
            return newIndex < 0 ? items.length - 1 : newIndex;
          });
        }
      }
      if (e.keyCode === 40) { // down arrow
        e.preventDefault();
        if (selectedIndex === null) {
          setSelectedIndex(0);
        } else {
          setSelectedIndex(prevSelectedIndex => {
            const newIndex = prevSelectedIndex + 1;
            return newIndex >= items.length ? 0 : newIndex;
          });
        }
      }
      if (e.keyCode === 13 && selectedIndex !== null) { // enter key
        onSelect(items[selectedIndex]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [items, selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      onSelect(items[selectedIndex]);
    }
  }, [selectedIndex, items, onSelect]);

  return selectedIndex;
};

export default useKeyboardNavigation;