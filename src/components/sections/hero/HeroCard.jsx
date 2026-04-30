function HeroCard({ image }) {
  return (
    <div className="w-[260px] h-[338px] rounded-xl overflow-hidden shadow-md">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default HeroCard;