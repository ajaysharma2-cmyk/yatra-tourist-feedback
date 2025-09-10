import React, { useState } from "react";
import SuccessModal from "./SuccessModal";

export default function BottomDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="sm:px-4  mt-2 w-28 h-14 rounded-xl bg-[#ff2d2d] text-white font-bold text-base shadow hover:bg-[#d60f0f] transition"
        onClick={() => setOpen(true)}
      >
        Submit
      </button>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 w-full pointer-events-auto bg-black/40 z-auto"
          onClick={() => setOpen(true)}
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-2xl transition-transform duration-300 ${open ? "translate-y-0" : "translate-y-full"}`}
        style={{ minHeight: "420px" }}
      >
        <div className="flex flex-col items-center p-6">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-4" />
          <SuccessModal />
        </div>
      </div>
    </>
  );
}
