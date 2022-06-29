import { useMemo, useState } from "react";

export const useSortItems = (planes = []) => {
  debugger;
  const [desc, setDesc] = useState(false);

  const sortedItems = useMemo(() => {
    const sortableItems = [...planes];

    sortableItems.sort((a, b) => {
      if (+a.price < +b.price) return desc ? 1 : -1;
      if (+a.price > +b.price) return desc ? -1 : 1;

      return 0;
    });

    return sortableItems;
  }, [desc, planes]);

  return {
    desc,
    setDesc,
    sortedItems,
  };
};
