import VoucherBanner from '../components/voucher-banner';
import VoucherBottom from '../components/voucher-bottom';
import VoucherIntro from '../components/voucher-intro';
import VoucherMerit from '../components/voucher-merit';

export default function Page() {
  return (
    <div>
      <VoucherBanner
        src="/voucher/innovation-voucher/voucher-video4.mp4"
        title="DATA VOUCHER"
        description={`3,000만원 규모 AI 가공 솔루션으로 \n지원 사업을 무료로 이용해보세요!`}
      />
      <VoucherIntro
        voucher="혁신바우처"
        description="중소기업의 성장 촉진 및 지속 가능 성장 기반 확대를 도모하고자 시제품 제작, 인증획득, 시장조사 등 수요자 중심의 맞춤형 프로그램을 지원해드리는 사업입니다. 수요기업의 사업화 애로사항 해결을 도모하고자 최대 3,000만원 규모 AI 가공 솔루션을 제공합니다."
        src="/voucher/voucher-introimg.png"
      />
      <VoucherMerit voucher="혁신바우처" />
      <VoucherBottom />
    </div>
  );
}
