import type { FC, ReactNode } from "react";

declare global {
  namespace React {
    type ButtonElement = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

    type DivElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

    type ImageElement = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

    type Setter<T> = Dispatch<SetStateAction<T>>;
  }

  namespace Components {
    type Meta = FC<{
      title: string;
      description: string;
      image: string;
      children: ReactNode;
    }>;
  }
}
