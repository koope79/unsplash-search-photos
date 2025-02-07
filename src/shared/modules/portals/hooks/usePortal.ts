import { useCallback, useMemo, useState } from "react";
import { portalCreate } from "../functions/portalCreate";
import { UsePortal } from "../types";

const usePortal: UsePortal = ({
  id,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const { open, close } = useMemo(() => ({
    open: () => {
      setIsOpen(true);
    },
    close: () => {
      setIsOpen(false);
    },
  }), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Portal = useCallback(portalCreate({ id, isOpen }), [id, isOpen]);

  return { Portal, isOpen, open, close };
};

export default usePortal;
