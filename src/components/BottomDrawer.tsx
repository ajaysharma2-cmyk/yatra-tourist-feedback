import { useState } from "react";
import SuccessModal from "./SuccessModal";

interface BottomDrawerProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  loading: boolean;
  showModal: boolean;
  face: number | null;
}

export default function BottomDrawer({ onSubmit, loading, showModal, face }: BottomDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Only show submit button for ratings 1-3, not for 4-5 */}
      {(face !== 4 && face !== 5) && (
        <button
          className="w-full m-auto h-14 text-center rounded-xl bg-[#ff2d2d] text-white font-bold text-base shadow hover:bg-[#d60f0f] transition"
          onClick={() => {
            setOpen(true);
            onSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>);
          }}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      )}
      {/* Overlay - only show when success modal is displayed */}
      {showModal && (
        <div
          className="fixed inset-0 w-full pointer-events-auto bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Drawer - only show when success modal is displayed */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-2xl transition-transform duration-300 ${showModal ? "translate-y-0" : "translate-y-full"}`}
        style={{ minHeight: "330px" }}
      >
        <div className="flex flex-col items-center">
          {/* <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-4" /> */}
          <SuccessModal shadow="py-3 items-center" />
        </div>
      </div>
    </>
  );
}
