import React from 'react';
import SuccessImage from '../assets/success.png'
import govLogo from '../assets/gov_logo.png';
import YatraLogo from '../assets/Yatra_Incredible-India.png';
interface ModalProps {
    cssStyle?: string;
    shadow?: string;
}
function SuccessModal({ cssStyle, shadow }: ModalProps) {
    return (
        <div className={cssStyle}>
            <div className={`max-w-md w-full flex flex-col ${shadow}`}>
                <div className="mb-2 block w-full p-2">
                    <img src={SuccessImage} className='block float-start' />
                </div>
                <span className="font-bold text-[18px] sm:text-[24px] align-middle font-lato">
                    Thank you for your valuable participation.</span>
                <div className="mb-4 text-gray-600 text-center text-[16px] font-lato text-sm">Your feedback has been submitted successfully.</div>
                <div className="flex items-center justify-center  w-100 my-4">
                    {/* <img src={govLogo} alt="gov Logo" className="w-50" /> */}
                    <img src={YatraLogo} alt="Yatra Logo" className="w-80 m-auto block" />
                </div>
                <button
                    className="w-full py-3 rounded bg-[#d60f0f] text-white font-bold text-base shadow hover:bg-[#b90c0c] transition"
                    onClick={() => window.location.reload()}
                >
                    Back to Homepage
                </button>
            </div>
        </div>
    )
}

export default SuccessModal