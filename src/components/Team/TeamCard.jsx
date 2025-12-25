const TeamCard = ({ member }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-1">
        {member.name}
      </h3>

      <p className="text-gray-300 text-sm">
        {member.role}
      </p>
    </div>
  );
};

export default TeamCard;
