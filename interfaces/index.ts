import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface eventProps {
    ticketURL?: string;
}

export type Work = {
    id: string;
    title: string;
    subtitle?: string;
}
