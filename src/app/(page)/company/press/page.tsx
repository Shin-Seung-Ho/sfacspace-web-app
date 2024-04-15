import BannerVideoCard from '@/components/common/banner-video';

export default function Page() {
  return (
    <main className="min-h-screen">
      <BannerVideoCard
        src="/company/company-press-video.mp4"
        title={`SFACSPACE
        ISSUE`}
        description="성장과 반전을 통해 나아가는 스팩스페이스의 여정에 함께 하세요!"
      />
    </main>
  );
}
