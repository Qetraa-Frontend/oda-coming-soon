import { PopupButton } from "@typeform/embed-react";

export default function Hero({
    backgroundImageSrc,
    buttonText,
    description,
    otherData,
    title,
}) {
    return (
        <div
            className="relative bg-cover bg-no-repeat bg-top h-screen w-[100vw] transition-all duration-1000"
            style={{ backgroundImage: `url(${backgroundImageSrc})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative z-40 container px-4 md:px-6 mx-auto h-full w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="col-span-1 md:col-span-6 mt-44 md:mt-64">
                    <h1 className="uppercase font-medium text-6xl md:text-8xl text-white">{title}</h1>
                    <p className="font-medium text-lg md:text-2xl text-white mt-3 md:mt-5 max-w-[468px]">{description}</p>
                    <PopupButton
                        className="bg-transparent hover:bg-white text-white hover:text-black py-1 md:py-2 px-4 md:px-8 border border-white hover:border-transparent rounded transition-all duration-1000 text-lg md:text-2xl font-medium mt-12 md:mt-24 inline-block"
                        id="wQAxTCsy"
                        size={500}
                    >
                        {buttonText}
                    </PopupButton>
                </div>
                {otherData && <div className="col-span-1 md:col-span-6 hidden md:block">{otherData}</div>}
            </div>
        </div>
    );
}
