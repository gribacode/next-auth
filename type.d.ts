import type { FC, ReactNode } from "react";
import type * as ReactIcons from "react-icons/hi";

declare global {
  namespace React {
    type ButtonElement = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

    type DivElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

    type InputElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

    type ImageElement = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

    type Setter<T> = Dispatch<SetStateAction<T>>;
  }

  namespace Component {
    type Meta = FC<{
      title: string;
      description: string;
      image: string;
      children: ReactNode;
    }>;

    type Button = FC<
      {
        title: string;
        image?: string;
      } & React.ButtonElement
    >;

    type Field = FC<
      {
        icon: keyof typeof ReactIcons;
        isPassword?: boolean;
      } & React.InputElement
    >;

    type HeroIcon = FC<
      {
        name: keyof typeof ReactIcons;
        size: number;
      } & React.ImageElement
    >;
  }
}
