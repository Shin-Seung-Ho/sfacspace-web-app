import BannerCard from '@/components/common/banner-content';

export default function Page() {
  return (
    <main className="min-h-screen">
      <BannerCard
        src="/company/press-banner.png"
        title={`SFACSPACE
        ISSUE`}
        description="성장과 반전을 통해 나아가는 스팩스페이스의 여정에 함께 하세요!"
      />
    </main>
  );
}
