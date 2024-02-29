function About() {
    return (
        <div className="lg:grid lg:grid-cols-2 lg:gap-28 lg:place-items-center">
            <img
                src={"/images/shared/mobile/image-best-gear.jpg"}
                alt="bestGearImg"
                loading="lazy"
                className="rounded-lg md:hidden"
            />
            <img
                src={"/images/shared/tablet/image-best-gear.jpg"}
                alt="bestGearImg"
                loading="lazy"
                className="hidden md:block md:rounded-lg lg:hidden"
            />
            <img
                src={"/images/shared/desktop/image-best-gear.jpg"}
                alt="bestGearImg"
                loading="lazy"
                className="hidden lg:block lg:rounded-lg lg:order-2"
            />
            <div className="md:w-full md:mx-auto md:my-0 md:max-w-[575px] 
            lg:w-[410px] lg:order-1">
                <h2 className="text-black text-center mt-10 mb-8 
                font-bold text-3xl leading-10 md:text-[40px] md:mt-[63px] 
                md:leading-relaxed lg:text-left lg:leading-normal">
                    BRINGING YOU THE <span className="text-primary">BEST</span> AUDIO GEAR
                </h2>
                <p className="primary-para text-medium-gray leading-6 lg:text-left">
                    Located at the heart of New York City, Audiophile is the premier store
                    for high end headphones, earphones, speakers, and audio accessories.
                    We have a large showroom and luxury demonstration rooms available for
                    you to browse and experience a wide range of our products. Stop by our
                    store to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </p>
            </div>
        </div>
    );
}

export default About;
