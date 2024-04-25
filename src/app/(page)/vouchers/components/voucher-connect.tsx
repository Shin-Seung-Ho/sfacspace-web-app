import Image from 'next/image';
import HighlightWord from './highlight-word';

/* eslint-disable react/no-array-index-key */
interface VoucherConnectProps {
  text: string;
  highlightWords: string;
  src: string;
  imgwidth: number;
}

export default function VoucherConnect({
  text,
  highlightWords,
  src,
  imgwidth,
}: VoucherConnectProps) {
  return (
    <section className=" mx-auto flex max-w-7xl flex-col items-center py-24">
      <div className=" mx-auto w-3/4 whitespace-pre-line break-keep text-center">
        <HighlightWord text={text} highlightWords={highlightWords} />
      </div>
      <p className=" py-6 text-BM24 text-[#131313]">
        데이터 바우처로 사람과 사람을 연결합니다.
      </p>
      <Image
        src={src}
        width={imgwidth}
        height={0}
        alt="connectimg"
        className="py-10"
      />
    </section>
  );
}
