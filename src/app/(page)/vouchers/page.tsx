import Image from 'next/image';
import VoucherMerit from './components/voucher-merit';
import VoucherBanner from './components/voucher-banner';
import VoucherBottom from './components/voucher-bottom';
import VoucherConnect from './components/voucher-connect';

export default function Page() {
  return (
    <main>
      <VoucherBanner
        src="/voucher/data-voucher/voucher-video1.mp4"
        title="DATA VOUCHER"
        description={`6,000만원 규모의 \n AI 가공 솔루션 지원사업을 \n 무료로 이용해보세요!`}
      />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 py-32">
        <div className=" flex w-full items-center justify-between">
          <p className=" text-HB60 font-extrabold">
            데이터 바우처는 <br /> 무엇일까요?
          </p>
          <p className=" w-1/2 whitespace-pre-line break-keep text-BM20">
            {`데이터구축 -> 가공 <- 유통 등 단계를 유기적으로 연계하고,
데이터 구매 · 가공을 통한 거래를 확대함으로써
데이터·AI 산업 활성화 생태계 조성 및 데이터 활용에 어려움을 겪는
중소·벤처기업, 소상공인 및 1인 창조기업, 예비창업자를 대상으로
데이터 구매·가공 바우처를 지원하는 사업입니다.`}
          </p>
        </div>
        <div className=" flex">
          <div className="flex flex-col items-center">
            <Image
              src="/voucher/data-voucher/datavoucher1.png"
              width={300}
              height={0}
              alt="voucher-introimg"
            />
            <p className=" py-3 text-BM20">데이터구축</p>
          </div>
          <Image
            src="/voucher/data-voucher/datavoucherright.png"
            width={200}
            height={0}
            alt="voucher-introimg"
          />
          <div className="flex flex-col items-center">
            <Image
              src="/voucher/data-voucher/datavoucher2.png"
              width={300}
              height={0}
              alt="voucher-introimg"
            />
            <p className=" py-3 text-BM20">가공</p>
          </div>
          <Image
            src="/voucher/data-voucher/datavoucherleft.png"
            width={200}
            height={0}
            alt="voucher-introimg"
          />
          <div className="flex flex-col items-center">
            <Image
              src="/voucher/data-voucher/datavoucher3.png"
              width={300}
              height={0}
              alt="voucher-introimg"
            />
            <p className=" py-3 text-BM20">유통</p>
          </div>
        </div>
      </div>
      <VoucherMerit voucher="데이터바우처" />
      <VoucherConnect
        text={`데이터바우처는 데이터 활용을
        효율적으로 이끌어낼 수 있어요`}
        highlightWords="효율적"
        src="/voucher/data-voucher/datavoucher-connect.png"
        imgwidth={1200}
      />
      <VoucherBottom />
    </main>
  );
}
