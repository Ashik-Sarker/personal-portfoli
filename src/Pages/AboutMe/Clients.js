import React from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "purple", borderRadius: "40px", fontSize:"50px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "purple", borderRadius: "40px", fontSize:"50px" }}
      onClick={onClick}
    />
  );
}

const Clients = () => {

    const settings = {
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    return (
        <div className='text-white mt-16'>
            <div style={{ width: "160px" }}  className='flex mx-auto mb-12'>
                <div className='border h-3 mt-7 border-secondary'></div>
                <div className=" font-serif"><h1 className='text-3xl text-center border-b-2 border-secondary px-3 pb-1'>CLIENTS</h1></div>
                <div className='border h-3 mt-7 border-secondary'></div>
            </div>
            <Slider {...settings}>
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        return <div key={index}>{item}</div>
                    })
                }
            </Slider>
        </div>
    );
};

export default Clients;