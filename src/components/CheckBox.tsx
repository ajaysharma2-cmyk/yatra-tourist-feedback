import React from 'react';

type CheckBoxProps = {
    options?: string[];
    selected: string[];
    onChange: (selected: string[]) => void;
};

const defaultOptions: string[] = [
    "Not feeling welcomed and behaviour of locals",
    "Lack of Hygiene & cleanliness",
    "Lack of Safety and Security measures",
    "Overcrowding",
    "Bad Experience at attractions, things to do (Eg. Leisure activities, Museums, Shopping, Food, etc.)",
    "Lack of Accessibility & wayfinding (local travel, signages, traffic, universal accessibility)",
    "Poor Quality and low service standards (Eg. at Eateries, Drivers, Guides etc.)",
    "Other (100 words)"
];

const CheckBox: React.FC<CheckBoxProps> = ({ options = defaultOptions, selected, onChange }) => {
    const toggleOption = (option: string) => {
        let updated: string[];
        if (selected.includes(option)) {
            updated = selected.filter((o) => o !== option);
        } else {
            updated = [...selected, option];
        }
        onChange(updated);
    };
    return (
        <>
            {options.map((option, index) => (
                <label key={index} htmlFor={`option-${index}`} className="flex items-start space-x-3 transition rounded-lg py-3 cursor-pointer">
                    <input
                        type="checkbox"
                        id={`option-${index}`}
                        checked={selected.includes(option)}
                        onChange={() => toggleOption(option)}
                        className="accent-[#d60f0f] h-5 w-5 min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px] mt-1 flex-shrink-0"
                        style={{ height: '18px', width: '18px' }}
                    />
                    <span className="text-gray-800 text-sm">{option}</span>
                </label>
            ))}
        </>
    );
};

export default CheckBox;