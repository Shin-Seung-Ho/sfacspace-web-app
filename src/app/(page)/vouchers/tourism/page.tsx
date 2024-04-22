import VoucherBanner from '../components/voucher-banner';
import VoucherBottom from '../components/voucher-bottom';
import VoucherConnect from '../components/voucher-connect';
import VoucherIntro from '../components/voucher-intro';

export default function Page() {
  return (
    <div>
      <VoucherBanner
        src="/voucher/tourism-voucher/voucher-video5.mp4"
        title="DATA VOUCHER"
        description={`관고아기업 혁신활동 지원으로 \n업계 체질 개선 및 환경 변화 대응력 강화`}
      />
      <VoucherIntro
        voucher="관광기업 혁신바우처"
        description="관광 중소기업이 관광시장의 변화에 대응할 수 있도록 혁신 서비스를 제공하고, 서비스 제공기업과 협업을 통해 우리 관광산업을 주도하기 위한 사업 고도화를 위한 역량 강화를 지원합니다.
        서류와 발표평가를 통해 수요기업으로 선정될 경우, 스팩스페이스의 특화된 서비스를 지원 받을 수 있습니다."
        src="/voucher/voucher-introimg.png"
      />
      <VoucherConnect
        text={`AI 솔루션을 쉽게 도입하여
        더 효율적으로 과제를 해결할 수 있어요`}
        highlightWords="더 효율적으로 과제를 해결"
        src="/voucher/tourism-voucher/tourismvoucher-connect.png"
        imgwidth={980}
      />
      <VoucherBottom />
    </div>
  );
}
