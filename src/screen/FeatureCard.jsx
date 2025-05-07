import { FaCheckCircle } from "react-icons/fa";

export default function FeatureCard({
  iconUrl,
  title,
  saveText,
  features = [],
}) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 sm:p-8 w-full max-w-[400px] m-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* Icon */}
      <img
        src={iconUrl}
        alt={title}
        className="w-24 h-24 object-contain mx-auto mb-6"
        style={{ background: "#fff", borderRadius: 12 }}
      />

      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2">
        {title}
      </h3>

      {/* Save text */}
      <div className="text-2xl text-[#ff3850] font-medium text-center mb-8">
        {saveText}
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-4 mt-2 w-full">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-lg text-gray-500">
            <FaCheckCircle className="text-[#ff3850] min-w-[20px]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 