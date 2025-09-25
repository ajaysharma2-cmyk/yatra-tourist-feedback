import React from 'react';

type RatingProps = {
    value: number;
    onChange: (value: number) => void;
    label: string;
};

const Rating: React.FC<RatingProps> = ({ value, onChange, label }) => {
    return (
        <div className="my-10 max-w-6xl mx-auto px-5">
            <div className="font-semibold text-lg mb-2 font-lato">{label}</div>
            <div className="flex items-center gap-3 sm:gap-5 md:gap-8 mb-1 justify-between md:justify-start">
                {[1, 2, 3, 4, 5].map((num) => (
                    <button
                        key={num}
                        type="button"
                        aria-label={`Rate ${num} star${num > 1 ? 's' : ''}`}
                        onClick={() => onChange(num)}
                        className={`focus:outline-none w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center transition-transform duration-200 ${value === num ? 'scale-125' : ''}`}
                        style={{ minWidth: undefined, minHeight: undefined }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill={value >= num ? '#FFD600' : 'none'}
                            stroke={value >= num ? '#FFD600' : '#888'}
                            viewBox="0 0 48 48"
                            width="100%"
                            height="100%"
                            className="transition-all duration-200 group-hover:scale-125"
                        >
                            <path
                                d="M24 6
                                        l5.09 10.32
                                        11.41 1.66
                                        -8.25 8.04
                                        1.95 11.38
                                        -10.2-5.37
                                        -10.2 5.37
                                        1.95-11.38
                                        -8.25-8.04
                                        11.41-1.66z"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </svg>
                    </button>
                ))}
            </div>
            <div className="flex justify-between text-xs mt-1 md:w-[450px]">
                <span className="text-[#d60f0f] font-medium font-lato">Very Unlikely</span>
                <span className="text-green-700 font-medium font-lato">Very Likely</span>
            </div>
            
        </div>
    );
};

export default Rating;
