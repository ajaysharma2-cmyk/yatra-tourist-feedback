import YatraLogo from '../assets/Yatra_logo.png';
import Like from '../assets/emoji/like.png'
import Dislike from '../assets/emoji/dislike.png'
const Header = ({ faces, destinationName, subTitle }: any) => {
    return (
        <div>

            <header className="bg-white border-b border-t-2  border-t-yellow-100 shadow">
                <div className="max-w-6xl mx-auto py-3 flex items-center justify-center md:justify-start space-x-6">
                    {/* Yatra Logo */}
                    <img
                        src={YatraLogo}
                        alt="Yatra Logo"
                        className="  object-contain"
                    />
                </div>
            </header>
            <div>
                <div

                    className="px-3 py-6  border-b border-gray-200"
                    style={{
                        background: faces > 3
                            ? 'linear-gradient(180deg, #F1E070 0%, #77DEA8 100%)'
                            : 'linear-gradient(180deg, #F1E070 0%, #DEA4A4 100%)'
                    }}
                >
                    <div className='max-w-6xl mx-auto space-x-6'>
                        <div className='flex items-center gap-4'>
                            <span className="text-3xl align-middle">
                                <img
                                    src={faces > 3 ? Like : Dislike}
                                    alt="emoji"
                                    className="w-290 h-290 sm:w-290 sm:h-290 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                                />
                            </span>
                            <div className="flex flex-col flex-1">
                                <span className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 font-lato">Thank you for your response!</span>
                                {
                                    faces > 3 ?
                                        <span className="text-sm sm:text-lg md:text-xl lg:text-2xl text-black font-light font-lato">Thank you for your feedback. We’re delighted to know you had a great experience. May we also ask </span> :
                                        <span className="text-sm sm:text-lg md:text-xl lg:text-2xl text-black font-light font-lato">Please let us know if there are any specific areas from the list below that you would like to see improved in <span className="">{destinationName}</span>?</span>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
