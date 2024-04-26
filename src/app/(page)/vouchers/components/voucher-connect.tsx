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
    <section className=" mobile:py-24 mx-auto flex max-w-7xl flex-col items-center py-7">
      <div className=" mx-auto w-3/4 whitespace-pre-line break-keep text-center">
        <HighlightWord text={text} highlightWords={highlightWords} />
      </div>
      <p className=" mobile:text-[#131313] mobile:text-BM24 py-6 text-BR12 text-[#787878]">
        데이터 바우처로 사람과 사람을 연결합니다.
      </p>
      <Image
        src={src}
        width={imgwidth}
        height={0}
        alt="connectimg"
        className="mobile:py-10 max-mobile:px-2 py-3"
      />
    </section>
  );
}
