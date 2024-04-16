/* eslint-disable react/no-array-index-key */
import { pressData } from '@/app/config/constants';
import BannerVideoCard from '@/components/common/banner-video';
import NewsCard from './components/news-card';

export default function Page() {
  return (
    <main className="min-h-screen">
      <BannerVideoCard
        src="/press/press-video.mp4"
        title={`SFACSPACE
        ISSUE`}
        description="성장과 반전을 통해 나아가는 스팩스페이스의 여정에 함께 하세요!"
      />
      <div className="mx-auto flex max-w-7xl flex-col gap-20 py-24">
        <p className="text-HB28">보도자료</p>
        <div className="grid grid-cols-3 gap-10">
          {pressData.map((e, idx) => (
            <NewsCard
              key={idx}
              src={e.src}
              day={e.day}
              title={e.title}
              content={e.content}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
