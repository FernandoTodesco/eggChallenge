export interface ISlide {
  buttonText: string;
  image: string;
  lead?: boolean;
  onClickCallback: (index: number) => void;
  subtitle: string;
  title: string;
}
