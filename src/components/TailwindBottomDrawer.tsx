import React, { useState } from "react";

export default function TailwindBottomDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-blue-600 text-white rounded shadow-lg z-50"
        onClick={() => setOpen(true)}
      >
        Open Bottom Drawer
      </button>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-2xl transition-transform duration-300 ${open ? "translate-y-0" : "translate-y-full"}`}
        style={{ minHeight: "220px" }}
      >
        <div className="flex flex-col items-center p-6">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-4" />
          <h2 className="text-lg font-bold mb-2">Bottom Drawer</h2>
          <p className="text-gray-600 mb-4">This is a simple Tailwind CSS bottom drawer. Click outside to close.</p>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
