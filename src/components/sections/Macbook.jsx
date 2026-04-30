import macbook from "../../assets/macbook.png";

export default function Macbook() {
  return (
    <div className="flex justify-center">
      <img
        src={macbook}
        alt="Macbook preview"
        className="max-w-full h-auto"
      />
    </div>
  );
}