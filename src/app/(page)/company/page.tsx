// import Image from 'next/image';

import BannerCard from '@/components/common/banner-content';

export default function Page() {
  return (
    <main className="min-h-screen w-full">
      <BannerCard
        src="/company/company-banner.png"
        title={`AI solutions
        With SFACSPACE!`}
        description="스팩스페이스는 인공지능 기술과 데이터 처리를 활용한 독자적인 솔류션을 개발합니다."
      />
    </main>
  );
}
