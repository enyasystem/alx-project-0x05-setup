export interface ReactComponentProps {
  children?: React.ReactNode;
}

export interface GeneratedImageProps {
  imageUrl: string;
  prompt?: string;
  width?: boolean;
  action: (url: string) => void;
}
