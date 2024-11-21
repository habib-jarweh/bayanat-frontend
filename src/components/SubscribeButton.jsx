import { Mail } from "lucide-react";

const SubscribeButton = ({ variant = "default", className = "" }) => {
  const baseStyles =
    "flex items-center gap-2 font-semibold rounded-lg transition-colors duration-300";
  const variants = {
    default: "bg-white text-blue-500 hover:bg-gray-100 px-6 py-2",
    navbar: "bg-blue-500 text-white hover:bg-blue-600 px-4 py-2",
    large: "bg-white text-blue-500 hover:bg-gray-100 px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={() => {
        /* TODO Add subscribe modal/form logic */
      }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <Mail className={`${variant === "large" ? "h-5 w-5" : "h-4 w-4"}`} />
      Subscribe
    </button>
  );
};

export default SubscribeButton;
