import { useState } from "react";
import Slide from "../../components/Slide";
import { SliderContainer } from "./styles";
import starwars_PNG19 from "../../assets/images/starwars_PNG19.png";
import starwars_PNG23 from "../../assets/images/starwars_PNG23.png";
import starwars_PNG33 from "../../assets/images/starwars_PNG33.png";
import { ISlide } from "../../models/slide";

const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const moveSlide = (index: number) => setActiveSlideIndex(index);

  const slides: ISlide[] = [
    {
      buttonText: "descubrir",
      image: starwars_PNG23,
      lead: true,
      onClickCallback: moveSlide,
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus nibh velit, nec varius diam semper eget.",
      title: "I’m a text",
    },
    {
      buttonText: "siguiente",
      image: starwars_PNG33,
      lead: false,
      onClickCallback: moveSlide,
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus nibh velit, nec varius diam semper eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus nibh velit, nec varius diam semper eget.",
      title: "I’m another text",
    },
    {
      buttonText: "finalizar",
      image: starwars_PNG19,
      lead: false,
      onClickCallback: moveSlide,
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus nibh velit, nec varius diam semper eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus nibh velit, nec varius diam semper eget.",
      title: "I’m another text",
    },
  ];

  return (
    <SliderContainer>
      <Slide slides={slides} activeSlideIndex={activeSlideIndex} />
    </SliderContainer>
  );
};

export default Slider;
