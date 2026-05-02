export default function ProgramModal({ selectedProgram, onClose }) {
  if (!selectedProgram) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-glow">
        <div className="p-6">
          <button
            onClick={onClose}
            className="float-right text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ×
          </button>
          <img
            src={selectedProgram.img}
            alt={selectedProgram.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{selectedProgram.title}</h2>
          <p className="text-gray-600 mb-4">{selectedProgram.desc}</p>
          <p className="text-sm leading-relaxed">{selectedProgram.details}</p>
        </div>
      </div>
    </div>
  );
}
