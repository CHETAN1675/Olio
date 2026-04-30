import macbook from "../../assets/macbook.png";

export default function Macbook() {
  return (
    <section className="w-full flex justify-center px-4 md:px-6 py-10 md:py-16">
      <img
        src={macbook}
        alt="Macbook preview"
        className="w-full max-w-5xl h-auto object-contain"
      />
    </section>
  );
}