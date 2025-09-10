import React from 'react';
import { options } from '../utils/constant';

interface CheckboxListProps {
    optionsList?: string[];
    selected?: string[];
    toggleOption: (option: string) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ optionsList = options, selected, toggleOption }) => {
    return (
        <>
            {optionsList.map((option: string, index: number) => (
                <label
                    key={index}
                    htmlFor={`option-${index}`}
                    className="flex items-start space-x-3 transition rounded-lg md:py-3 py-1 cursor-pointer"
                >
                    <input
                        type="checkbox"
                        id={`option-${index}`}
                        checked={selected?.includes(option)}
                        onChange={() => toggleOption(option)}
                        className="accent-[#d60f0f] h-5 w-5 min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px] flex-shrink-0"
                        style={{ height: '18px', width: '18px' }}
                    />
                    <span className="text-gray-800 text-sm">{option}</span>
                </label>
            ))}
        </>
    );
};

export default CheckboxList;
