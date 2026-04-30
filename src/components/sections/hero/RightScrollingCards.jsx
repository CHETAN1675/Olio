import Card from "./HeroCard";

const cards = [
  { type: "image", image: "/images/card1.png" },
  { type: "image", image: "/images/card2.png" },
  { type: "image", image: "/images/card3.png" },
  { type: "image", image: "/images/card4.png" },
  { type: "image", image: "/images/card5.png" },
  { type: "image", image: "/images/card6.png" },
  { type: "image", image: "/images/card7.png" },
  { type: "image", image: "/images/card8.png" },
];

function RightScrollingCards() {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
      
      {/* Fade gradients */}
      <div className="absolute top-0 left-0 w-full h-16 md:h-24 bg-gradient-to-b from-[#F6F6F8] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-[#F6F6F8] to-transparent z-10" />

      <div className="flex justify-center gap-4 md:gap-6">
        
        {/* Track 1 */}
        <div className="flex flex-col gap-4 md:gap-6 animate-scrollUp">
          {[...cards, ...cards].map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>

        {/* Track 2 */}
        <div className="hidden sm:flex flex-col gap-4 md:gap-6 animate-scrollDown mt-10 md:mt-20">
          {[...cards, ...cards].map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default RightScrollingCards;