import VoucherBanner from '../components/voucher-banner';
import VoucherBottom from '../components/voucher-bottom';
import VoucherIntro from '../components/voucher-intro';

export default function Page() {
  return (
    <div>
      <VoucherBanner
        src="/voucher/industrial-voucher/voucher-video2.mp4"
        title="산업맞춤형 혁신 VOUCHER"
        description={`3단계 맞춤형 AI 교육을 통해\n AI 이론부터 실무에 적용할 수 있도록 교육을 진행합니다.`}
      />
      <VoucherIntro
        voucher="산업맞춤형 혁신바우처"
        description="AI / SW 도입계획을 보유하고 있는 기업 · 출연연(수요기업)과 교육 공급기업 매칭, 수요기업 재직자에게 전략 수립부터 입문 / 특화 · 융합에 이르는 실무 교육을 제공함으로써 4차 산업혁명에 맞는 인재를 양성하는 정부 지원 사업입니다."
        src="/voucher/voucher-introimg.png"
      />
      <VoucherBottom />
    </div>
  );
}
