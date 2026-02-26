import TeamCard from "./TeamCard";
import logo from "./assets/ieeeLogo.png";

function App() {

  const teamMembers = [
    {
      name: "Sudha",
      chapter: "Web Resources",
      role: "Chair",
      description: "Leads the Web Resources team and manages all technical events."
    },
    {
      name: "Aman",
      chapter: "Web Resources",
      role: "Secretary",
      description: "Handles documentation and coordinates technical workshops."
    },
    {
      name: "Kiran",
      chapter: "Web Resources",
      role: "Vice-President",
      description: "Oversees planning and supports event execution."
    }
  ];

  return (
    <div className="min-h-screen py-10 px-5 bg-gradient-to-b from-[#0a0f2c] to-black">

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src={logo} alt="IEEE Logo" className="w-20 md:w-24 opacity-90" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-400 tracking-wide drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">
        IEEE Web Resources Team
      </h1>

      {/* Card Section */}
      <div className="max-w-5xl mx-auto">

        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {teamMembers.slice(0, 2).map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              chapter={member.chapter}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>

        {/* Bottom Centered Card */}
        <div className="flex justify-center">
          <div className="w-full sm:w-[48%]">
            <TeamCard
              name={teamMembers[2].name}
              chapter={teamMembers[2].chapter}
              role={teamMembers[2].role}
              description={teamMembers[2].description}
            />
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;