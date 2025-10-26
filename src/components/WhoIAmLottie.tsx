"use client"

import Lottie from "lottie-react";
import whoIamLottie from "../../public/whoIam.json"


const WhoIAmLottie = () => {
    return (
        <Lottie animationData={whoIamLottie} className="md:w-1/2"/>
    );
};

export default WhoIAmLottie;