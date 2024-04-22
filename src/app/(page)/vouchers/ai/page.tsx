import VoucherBanner from '../components/voucher-banner';
import VoucherBottom from '../components/voucher-bottom';
import VoucherConnect from '../components/voucher-connect';
import VoucherIntro from '../components/voucher-intro';
import VoucherMerit from '../components/voucher-merit';

export default function Page() {
  return (
    <main>
      <VoucherBanner
        src="/voucher/ai-voucher/voucher-video3.mp4"
        title="DATA VOUCHER"
        description={`3억원 규모 AI 솔루션으로\n지원 사업을 무료로 이용해보세요!`}
      />
      <VoucherIntro
        voucher="AI 바우처"
        description="정보통신산업진흥원과 과학기술정보통신부에서 수요기업에 바우처를 발급, 수요기업은 바우처로 공급기업의 AI 솔루션을 도입하여 당면 과제를 해결하고 생산성을 혁신하는 제도입니다.
        서류와 발표평가를 통해 수요기업으로 선정될 경우, 스팩스페이스의 AI 솔루션을 지원 받을 수 있습니다."
        src="/voucher/voucher-introimg.png"
      />
      <VoucherMerit voucher="AI바우처" />
      <VoucherConnect
        text={`AI 솔루션을 쉽게 도입하여 \n 더 효율적으로 과제를 해결할 수 있어요`}
        highlightWords="더 효율적으로 과제를 해결"
        src="/voucher/ai-voucher/aivoucher-connect.png"
        imgwidth={800}
      />
      <VoucherBottom />
    </main>
  );
}
