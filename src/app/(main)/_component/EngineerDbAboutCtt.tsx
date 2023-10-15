import { Image, Text } from "@/components/atoms";

type props = {
  index: number;
  title: string;
  description: string;
  imageAlt: string;
};

export const EngineerDbAboutCtt: React.FC<props> = ({
  index,
  title,
  description,
  imageAlt,
}) => {
  return (
    <div className="pb-16 md:flex">
      <div className="w-full md:w-6/12">
        <h3 className="mb-4 flex items-center text-xl font-semibold">
          <span className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
            {index}
          </span>
          {title}
        </h3>
        <Text className="mt-4">{description}</Text>
      </div>
      <div className="ml-auto mt-4 w-full px-4 md:w-6/12 md:px-16">
        <Image
          src={`/img/top_step${index}.png`}
          alt={imageAlt}
          height={400}
          width={800}
        />
      </div>
    </div>
  );
};
