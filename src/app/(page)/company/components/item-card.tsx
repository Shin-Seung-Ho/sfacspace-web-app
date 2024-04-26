import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface ItemCardProps {
  bgcolor: string;
  bgimg: string;
  bgimgWidth: number;
  itemimg: string;
  itemimgWidth: number;
  itemName: string;
  itemDescription: string;
  itemContent: string;
}

export default function ItemCard({
  bgcolor,
  bgimg,
  bgimgWidth,
  itemimg,
  itemimgWidth,
  itemName,
  itemDescription,
  itemContent,
}: ItemCardProps) {
  return (
    <Card
      className={`mobile:h-[300px] max-mobile:mx-5 relative flex h-[200px] w-full items-center rounded-3xl ${bgcolor}`}
    >
      <Image
        src={bgimg}
        width={bgimgWidth}
        height={0}
        alt="bgimg"
        className=" absolute right-0 z-0"
      />
      <Image
        src={itemimg}
        width={itemimgWidth}
        height={0}
        alt="itemimg"
        className=" absolute left-20"
      />
      <div className="z-10 flex flex-grow justify-end px-20">
        <div className="w-1/2">
          <p className=" text-[34px] font-bold">{itemName}</p>
          <p className="whitespace-pre-line break-keep py-3 text-[18px] font-semibold">
            {itemDescription}
          </p>
          <p className="whitespace-pre-line break-keep py-2 text-[14px] font-medium">
            {itemContent}
          </p>
        </div>
      </div>
    </Card>
  );
}
