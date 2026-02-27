import placeholder from "./assets/placeholder.png";
function TeamCard({ name, chapter, role, description }) {
  return (
    <div className="group relative bg-gradient-to-br from-[#0f1b3d] to-[#0a0f2c] rounded-xl p-6 text-white overflow-hidden transform hover:scale-105 transition duration-300 shadow-lg">

      <div className="group-hover:opacity-0 transition duration-300">
        <img
  src={placeholder}
  alt="Member"
  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
/>
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p className="text-center text-gray-400">{chapter}</p>
        <p className="text-center text-gray-400">{role}</p>
      </div>

      <div className="absolute inset-0 bg-blue-600 flex items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-sm leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
}

export default TeamCard;