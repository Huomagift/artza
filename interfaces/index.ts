import { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";

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

export interface pageTransitionProps {
    children: ReactNode;
}

export interface cardProps {
    children: ReactNode;
    className?: string;
}

export interface containerProps {
    children: ReactNode;
    className?: string;
}

export interface sectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

export interface FadeInViewProps {
    children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "outline";
  children?: ReactNode;
}
