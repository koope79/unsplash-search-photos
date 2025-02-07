import { FC, ReactNode, ReactPortal } from "react";

type PortalProps = {
  children: ReactNode
}

type PortalCreateArgs = {
  id: string
  isOpen: boolean
}

export type PortalCreate = ({ id, isOpen }: PortalCreateArgs) => ({ children }: PortalProps) => ReactPortal | null

type UsePortalProps = {
  id: string
  defaultOpen?: boolean
}

type UsePortalReturn = {
  Portal: FC<PortalProps>
  isOpen: boolean
  open: () => void
  close: () => void
}

export type UsePortal = ({ id, defaultOpen }: UsePortalProps) => UsePortalReturn
