function Arrow({ className, extraClass, onClick, icon }) {
  return (
    <button className={`${className} ${extraClass}`} onClick={onClick}>
      <i class={icon}></i>
    </button>
  );
}

export const sliderProps = {
  marqueeSliderRight: {
    
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  },


  testiSliderSix: {
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,
    arrows: true,
    dots: false,
    prevArrow: <Arrow icon={"far fa-chevron-left"} extraClass={"prev-arrow"} />,
    nextArrow: (
      <Arrow icon={"far fa-chevron-right"} extraClass={"next-arrow"} />
    ),
  },
};
