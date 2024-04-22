import VoucherBanner from '../components/voucher-banner';
import VoucherBottom from '../components/voucher-bottom';

export default function Page() {
  return (
    <div>
      <VoucherBanner
        src="/voucher/industrial-voucher/voucher-video2.mp4"
        title="산업맞춤형 혁신 VOUCHER"
        description={`3단계 맞춤형 AI 교육을 통해\n AI 이론부터 실무에 적용할 수 있도록 교육을 진행합니다.`}
      />
      <VoucherBottom />
    </div>
  );
}
