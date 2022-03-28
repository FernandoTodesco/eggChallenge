import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Lead,
  SlideButton,
  SlideContainer,
  SlideContent,
  SlideContentWrapper,
  SlideDot,
  SlideDotContainer,
  SlideHeader,
  SlideImg,
  SlideText,
  SlideTitle,
} from "./styles";
import { faArrowLeft, faCircle, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ISlide } from "../../models/slide";

interface ISlideProps {
  slides: ISlide[];
  activeSlideIndex: number;
}

const Slide: React.FC<ISlideProps> = ({ slides, activeSlideIndex }) => {
  const { buttonText, image, lead, onClickCallback, subtitle, title } =
    slides[activeSlideIndex];
  return (
    <SlideContainer lead={lead}>
      {!lead && (
        <SlideHeader>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => onClickCallback(activeSlideIndex - 1)}
          />
          <Link to="/">
            <FontAwesomeIcon icon={faX} />
          </Link>
        </SlideHeader>
      )}
      <SlideImg src={image} />
      <SlideContentWrapper>
        <SlideContent>
          {lead && <Lead>lead</Lead>}
          <SlideTitle>{title}</SlideTitle>
          <SlideText>{subtitle}</SlideText>
        </SlideContent>
        <SlideButton lead={lead}>{buttonText}</SlideButton>

        <SlideDotContainer>
          {slides.map(({ onClickCallback }: ISlide, index: number) => (
            <SlideDot
              icon={faCircle}
              onClick={() => onClickCallback(index)}
              isActive={activeSlideIndex === index}
              key={index}
            />
          ))}
        </SlideDotContainer>
      </SlideContentWrapper>
    </SlideContainer>
  );
};

export default Slide;
