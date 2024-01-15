import { Image, Text, Heading } from "@/components/atoms";

type props = {
  index: number;
  title: string;
  description: React.ReactNode;
  imageAlt: string;
};

export const EngineerDbAboutCtt: React.FC<props> = ({
  index,
  title,
  description,
  imageAlt,
}) => {
  return (
    <div className="rounded-lg bg-white p-4 py-6 shadow-md md:flex md:p-8">
      <div className="w-full md:w-6/12">
        <Heading as="h3" size="md" className="mb-4 flex items-center">
          <span className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
            {index}
          </span>
          {title}
        </Heading>
        <Text size="base" className="mt-4 md:text-lg">
          {description}
        </Text>
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
