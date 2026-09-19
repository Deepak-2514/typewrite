import Image from "next/image";

const Productcard = ({ name, description, image, id }) => {
  return (
    <div
      className="w-fit h-fit p-5 shadow-2xl flex flex-col rounded-2xl items-center justify-center transition-transform hover:scale-105 hover:shadow-green-200"
      role="article"
      aria-labelledby={`product-title-${id}`}
    >
      <div className="relative w-[250px] h-[250px] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={`${name} - ${description}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="flex flex-col gap-3 text-center">
        <h3 id={`product-title-${id}`} className="font-bold text-2xl pt-5">
          {name}
        </h3>
        <p className="text-xl text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Productcard;
