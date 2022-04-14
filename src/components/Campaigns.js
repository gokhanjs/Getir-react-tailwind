import { useState, useEffect } from "react"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Banners from 'api/banners.json'
import Slider from "react-slick";
export default function Campaigns() {
    function NextBtn({ className, style, onClick }) {
        return (
            <button className={`!text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
                <IoIosArrowForward />
            </button>
        )
    }
    function PrevBtn({ className, style, onClick }) {
        return (
            <button className={`!text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
                < IoIosArrowBack />
            </ button>
        )
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
    };
    const [banners, setBanners] = useState([])

    useEffect(() => {
        setBanners(Banners)
    }, [])
    return (
        <div className='md:container mx-auto md:py-8'>
            <h3 className='hidden md:block text-sm font-semibold mb-3 px-4 md:px-0'>Kampanyalar</h3>
            <Slider className="md:-mx-2" {...settings}>
                {banners && banners.map(banner => (
                    <div key={banner.id}>
                        <picture className="block md:px-2">
                            <img className='md:rounded-lg' src={banner.image} alt="kampanya" />
                        </picture>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
