import React, { useEffect, useState } from "react";
import { getFeedback, postFeedback } from "./services/feedbackService";
import Start from "./assets/header_starts.png";
import Bitmap from "./assets/Bitmap.jpg";
import YatraCollabLogo from "./assets/Yatra_logo.png";
import SocialIcons from "./components/SocialIcons";
import Header from "./components/Header";
import SuccessModal from "./components/SuccessModal";
import { faces, options } from "./utils/constant";
import Rating from "./components/Rating";
import BottomDrawer from "./components/BottomDrawer";
import CheckBox from "./components/CheckBox";
import CheckboxList from "./components/CheckBox";



const App: React.FC = () => {
  const [step, setStep] = useState<0 | 1 | 2>(0); // 0: face, 1: feedback, 2: thank yo
  const [face, setFace] = useState<number | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [suggestion, setSuggestion] = useState<string>("");
  const [destinationName, setDestinationName] = useState<string>("Jaipur");
  const [loading, setLoading] = useState(false);
  const [yourValue, setYourValue] = useState<number | null>(null);
  const [yourValueForOther, setYourValueForOther] = useState<number | null>(null);
  const [otherText, setOtherText] = useState("");
  const [visible, setVisible] = useState(false);
  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleFaceSelect = (value: number) => {
    setFace(value);
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      face,
      selected,
      suggestion,
      userId: "68bfdb51d354b939637a18dc",
      destinationType: "city",
      destinationName,
    };
    try {
      await postFeedback(data);
      // setStep(2);
      setVisible(true);
    } catch (error) {
      // setStep(2);
      setVisible(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeedback("68bfdb51d354b939637a18dc", "city", "Paris")
      .then((data: any) => {
        setDestinationName(data?.destinationName || '');
        console.log("Feedback API response:", data.destinationName);
      })
      .catch(err => {
        console.error("Error fetching feedback:", err);
      });
  }, [getFeedback]);


  return (
    <div>
      <div className="p-0">
        {/* Step 0: Face/emoji rating - Yatra design */}
        {step === 0 && (
          <div className="flex flex-col items-center justify-center border-0">
            <div className="py-0 max-w-xl w-full rounded-2xl border-gray-200 shadow-lg">
              {/* Header with logos */}
              <div className="px-4 pt-2 pb-1 md:px-8 md:pt-5 flex items-center justify-between">
                <img src={YatraCollabLogo} alt="Yatra Logo" className="m-auto w-11/12" />
              </div>
              {/* Red banner with stars and headline, with Bitmap background */}
              <div
                className="rounded-t-2xl px-8  pt-2 pb-2 mt-2 flex flex-col items-center relative overflow-hidden"
                style={{
                  backgroundColor: '#d60f0f',
                  backgroundImage: `url(${Bitmap})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '90px',
                }}
              >
                <div className="flex gap-1 mb-2">
                  <img src={Start} alt="stars" className="w-30 mb-2 md:w-36" />
                </div>
                <div className="text-[18px] sm:text-2xl font-bold text-white text-center font-lato mb-2">
                  Because, your opinion matters!
                </div>
              </div>
              {/* Intro text */}
              <div className="bg-white px-8 pt-6 pb-2 rounded-b-2xl">
                <div className="mb-2 text-gray-800  text-[16px]  font-lato">Dear Ms. Sharma,</div>
                <div className="my-5 text-gray-700  text-[16px]  font-lato">
                  The <span className="font-bold">Ministry of Tourism, Government of India</span>, in collaboration with <span className="font-bold">Yatra Online Limited</span>, seeks to gather your experience during your recent travel to <span className="font-lato font-bold text-blue-800">Jaipur</span> .<br />
                  This helps us do a better job at managing our destinations.
                  Completing this survey will only take about <span className="font-bold">30 seconds</span>.</div>
                {/* <div className="mb-4 text-gray-800  text-[16px]  font-lato">Thank you for your valuable participation.</div> */}
              </div>
              <div className="border-t border-gray-200"></div>
              <div className="bg-[#F7F7F7] px-8 pt-6 pb-2">
                <div className="mb-2  text-[#1E247E] text-base">How would you rate the destination <span className="font-lato font-bold text-blue-800">Jaipur</span> on a scale of 1 to 5?</div>
                {/* <div className="mb-2 text-sm text-gray-600">1 is 'Very disappointing' and 5 is 'Couldn't have been better'</div> */}
                <div className="my-7">
                  {/* Emoji rating bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    {faces.map((f, idx) => (
                      <button
                        key={f.value}
                        type="button"
                        onClick={() => handleFaceSelect(f.value)}
                        aria-label={f.label}
                        className={`flex flex-col items-center focus:outline-none group transition-transform ${face === f.value ? 'scale-110' : ''}`}
                      >
                        <span
                          className="text-3xl"
                          style={{
                            filter: face === f.value ? 'drop-shadow(0 0 6px #d60f0f)' : 'none',
                            borderRadius: '50%',
                            background: face === f.value ? '#ffe0e0' : '#f3f4f6',
                            border: face === f.value ? '2px solid #d60f0f' : '2px solid #e0e0e0',
                            padding: '6px',
                            marginBottom: '2px',
                            transition: 'all 0.2s',
                          }}
                        ><img src={f.emoji} /></span>
                      </button>
                    ))}
                  </div>
                  {/* Colored bar under emojis */}
                  <div className="w-full h-4 rounded-full mt-2 mb-2 flex overflow-hidden">
                    <div className="flex-1 bg-[#E6203B]"></div>
                    <div className="flex-1 bg-[#F3921A]"></div>
                    <div className="flex-1 bg-[#FFDF07]"></div>
                    <div className="flex-1 bg-[#AAFB36]"></div>
                    <div className="flex-1 bg-[#7EBA28]"></div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm  font-bold font-lato text-red-600 flex flex-col justify-center text-center align-center"><span>Very</span> <span>disappointing</span></span>
                    <span className="text-sm font-bold  font-lato text-green-600 mx-6">Great</span>
                  </div>
                </div>

              </div>
              <div className="border-t border-gray-200"></div>
              <div className="px-8 pt-6 pb-2">
                <SocialIcons />
              </div>
            </div>
          </div>
        )}
        {/* Step 1: Feedback form with face */}
        {step === 1 && (
          <>
            <form onSubmit={handleSubmit} className="px-0 py-0">
              <Header faces={faces.find(f => f.value === face)?.value} destinationName={destinationName} />
              {
                face === 0 || face === null ? <div className="p-8 text-center text-gray-600">Please select a rating to proceed.</div> : null
              }
              {
                Number(face) > 3 ?
                  <>
                    <Rating
                      value={yourValue ?? 0}
                      onChange={setYourValue}
                      label="How likely are you to visit this destination again in the future?"
                    />
                    <div className="border-t border-gray-200 block md:hidden"></div>
                    <Rating
                      value={yourValueForOther ?? 0}
                      onChange={setYourValueForOther}
                      label="How likely are you to recommend this destination to others?"
                    />
                  </>
                  :
                  <div className="px-4 sm:px-4 md:px-8 pt-3 sm:pt-6 pb-3 sm:pb-6 bg-white rounded-b-2xl">
                    <div className="flex flex-col max-w-6xl m-auto">
                      <CheckboxList selected={selected} toggleOption={toggleOption} />
                      {selected.includes("Other (100 words)") && (
                        <div className="my-4">
                          <textarea
                            value={otherText}
                            onChange={e => {
                              const value = e.target.value;
                              const words = value.trim().split(/\s+/).filter(Boolean);
                              if (words.length <= 100) setOtherText(value);
                            }}
                            rows={4}
                            className="w-full border border-gray-300 rounded p-3 text-gray-700 focus:outline-none focus:border-[#d60f0f] min-h-[60px]"
                            placeholder="Please specify (max 100 words)"
                          />
                          <div className="text-xs text-gray-500 text-right">
                            {otherText.trim().split(/\s+/).filter(Boolean).length} / 100 words
                          </div>
                        </div>
                      )}
                      <div className="mt-8">
                        <label htmlFor="suggestionBox" className="block mb-2 font-semibold text-gray-800">Suggestions & Improvements, if any</label>
                        <textarea
                          id="suggestionBox"
                          placeholder="Give your suggestions/detailed feedback"
                          value={suggestion}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSuggestion(e.target.value)}
                          maxLength={500}
                          rows={4}
                          cols={5}
                          className="w-full border border-gray-300 rounded p-3 text-gray-700 focus:outline-none focus:border-[#d60f0f] min-h-[60px]"
                        />
                      </div>
                    </div>
                  </div>
              }

              <div className="max-w-6xl md:px-0 px-6 m-auto">
                {/* Desktop only submit button */}
                <button
                  type="submit"
                  onClick={() => handleSubmit}
                  className="hidden md:block mt-2 w-28 h-14 rounded-xl bg-[#ff2d2d] text-white font-bold text-base shadow hover:bg-[#d60f0f] transition"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
            {/* Mobile only BottomDrawer */}
            <div className="block md:hidden mx-4 mb-2">
              <BottomDrawer />
            </div>
          </>
        )}
        {/* Step 2: Thank you modal */}
        {visible && (
          <SuccessModal cssStyle={"fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 px-4"} shadow="bg-white rounded-xl shadow-lg p-5 items-start" />
        )}
      </div>
    </div>
  );
};

export default App;
