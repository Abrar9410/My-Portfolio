"use client";

import Lottie from "lottie-react";
import contactMeLottie from "../../public/contact-me.json"


const ContactMeLottie = () => {
    return (
        <Lottie animationData={contactMeLottie} className="order-1 2xl:order-2 w-full sm:w-2/3 lg:w-1/2 2xl:w-[41%]"></Lottie>
    );
};

export default ContactMeLottie;