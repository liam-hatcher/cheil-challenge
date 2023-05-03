import Rating from "./Rating";

interface BookProps {
  title: string;
  description: string;
  imagePath: string;
  rating: string;
  isbn: string;
}

function Book({ title, description, imagePath, rating, isbn }: BookProps) {
  return (
    <div className="bg-white mx-2 my-4 rounded-3xl drop-shadow-xl">
      <div
        className="bg-cover bg-no-repeat bg-center h-40 rounded-t-3xl"
        style={{
          backgroundImage: `url(${new URL(imagePath, import.meta.url).href})`,
        }}
      />
      <div className="px-6 py-6">
        <Rating rating={rating} />
        <h3 className="text-lg mb-4">{title}</h3>
        <p className="italic font-light text-xs mb-6">{description}</p>
        <div className="flex justify-between">
          <button className="px-4 py-2 text-white text-xs bg-gradient-to-r from-sky-500 to-fuchsia-500 uppercase rounded-full">
            Order Now
          </button>
          <span className="font-thin text-xs align-baseline">ISBN: {isbn}</span>
        </div>
      </div>
    </div>
  );
}

export default Book;
