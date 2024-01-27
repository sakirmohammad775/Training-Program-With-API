

const Slider2 = () => {
    return (
        <>
            <header className="slider slider-prlx o-hidden">
                {/* Add other necessary Tailwind classes and styles */}
                <div className="swiper-container parallax-slider">
                    <div className="swiper-wrapper">
                        {/* Add individual slides */}
                        <div className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev">
                            {/* Slide content */}
                            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                        </div>
                        <div className="swiper-slide swiper-slide-duplicate-active">
                            {/* Slide content */}
                            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                        </div>
                        <div className="swiper-slide">
                            {/* Slide content */}
                        </div>
                        <div className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next">
                            {/* Slide content */}
                        </div>
                    </div>
                    {/* Add other necessary Tailwind classes and styles */}
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </header>
        </>
    );
};

export default Slider2;