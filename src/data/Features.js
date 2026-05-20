import {
    FaUserMd,
    FaRegClock,
    FaShieldAlt,
    FaHandHoldingHeart,
} from "react-icons/fa";

export const features = [{
        id: 1,
        icon: < FaUserMd className = "text-2xl sm:text-3xl text-teal-600" / > ,
        title: "Verified Specialists",
        desc: "All registered doctors undergo a strict background check and verification process.",
    },
    {
        id: 2,
        icon: < FaRegClock className = "text-2xl sm:text-3xl text-teal-600" / > ,
        title: "24/7 Availability",
        desc: "Book appointments or consult with on-duty medical officers at any time.",
    },
    {
        id: 3,
        icon: < FaShieldAlt className = "text-2xl sm:text-3xl text-teal-600" / > ,
        title: "Secure Data",
        desc: "Your medical history, personal information, and records are fully encrypted.",
    },
    {
        id: 4,
        icon: < FaHandHoldingHeart className = "text-2xl sm:text-3xl text-teal-600" / > ,
        title: "Patient-Centric Care",
        desc: "We prioritize your comfort and well-being with personalized healthcare plans.",
    },
];