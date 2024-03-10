import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function About() {
    return (
        <div className="lg:grid lg:grid-cols-2 lg:gap-28 lg:place-items-center">
            <div className="md:hidden">
                <LazyLoadImage
                    src="/images/shared/mobile/image-best-gear.jpg"
                    placeholderSrc="/images/shared/mobile/image-best-gear-small.jpg"
                    effect="blur"
                    className="rounded-lg"
                />
            </div>
            <div className="hidden md:block md:rounded-lg lg:hidden">
                <LazyLoadImage
                    src="/images/shared/tablet/image-best-gear.jpg"
                    placeholderSrc="/images/shared/tablet/image-best-gear-small.jpg"
                    effect="blur"
                    className="md:rounded-lg"
                />
            </div>
            <div className="hidden lg:block lg:order-2">
                <LazyLoadImage
                    src="/images/shared/desktop/image-best-gear.jpg"
                    placeholderSrc="/images/shared/desktop/image-best-gear-small.jpg"
                    effect="blur"
                    className='lg:rounded-lg'
                />
            </div>
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
