import React from "react";

type TDrawer = [
  {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  },
  () => void
];

const useDrawer = (): TDrawer => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const toggleDrawer = (): void => setOpenDrawer(!openDrawer);

  return [
    {
      openDrawer,
      setOpenDrawer,
    },
    toggleDrawer,
  ];
};

export default useDrawer;
