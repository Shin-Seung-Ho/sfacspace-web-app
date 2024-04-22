import VoucherMerit from './components/voucher-merit';
import VoucherBanner from './components/voucher-banner';
import VoucherBottom from './components/voucher-bottom';
import VoucherConnect from './components/voucher-connect';
import VoucherIntro from './components/voucher-intro';

export default function Page() {
  return (
    <main>
      <VoucherBanner
        src="/voucher/data-voucher/voucher-video1.mp4"
        title="DATA VOUCHER"
        description={`6,000만원 규모의 \n AI 가공 솔루션 지원사업을 \n 무료로 이용해보세요!`}
      />
      <VoucherIntro
        voucher="데이터 바우처"
        description="데이터구축 -> 가공 <- 유통 등 단계를 유기적으로 연계하고,
데이터 구매 · 가공을 통한 거래를 확대함으로써
데이터·AI 산업 활성화 생태계 조성 및 데이터 활용에 어려움을 겪는
중소·벤처기업, 소상공인 및 1인 창조기업, 예비창업자를 대상으로
데이터 구매·가공 바우처를 지원하는 사업입니다."
        src="/voucher/voucher-introimg.png"
      />
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
