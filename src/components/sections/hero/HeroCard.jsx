function HeroCard({ image }) {
  return (
    <div className="w-[180px] h-[240px] sm:w-[220px] sm:h-[300px] md:w-[260px] md:h-[338px] rounded-xl overflow-hidden shadow-md">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default HeroCard;