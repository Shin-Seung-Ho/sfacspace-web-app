/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import BannerVideoCard from '@/components/common/banner-video';
import History from './components/history';
import { historyData } from '@/app/config/constants';

export default function Page() {
  return (
    <main className="min-h-screen w-full">
      <BannerVideoCard
        src="/history/history-video.mp4"
        title={`SFACSPACE
        HISTORY`}
        description="성장과 반전을 통해 나아가는 스팩스페이스의 여정에 함께 하세요!"
      />

      <section className="flex h-[700px] items-center">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full flex-col gap-10 text-HB48">
            <p>해마다 성장하며,</p>
            <div className="flex items-center justify-end gap-3">
              <div>발전해 나아가는</div>
              <div className="relative font-extrabold">
                <p className="relative z-50"> 스팩스페이스</p>
                <div className="absolute bottom-0 z-0 h-3/5 w-full bg-[#B5E5F9]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="relative h-[800px]">
          <Image
            src="/history/history-bg.png"
            width={1440}
            height={0}
            style={{ width: '100%', height: '100%' }}
            alt="historybg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-36 text-white">
              <h2 className=" text-HB60">
                과거에서부터 미래를 향한 우리의 성장 이야기
              </h2>
              <div className="flex max-w-7xl gap-10 whitespace-pre-line break-keep text-BR20 text-[#A0A0A0]">
                <p>
                  (주) 스팩스페이스는 NLP와 Computer Vision을 기반으로 한 AI
                  솔루션 전문 기업입니다. 우리는 인공지능 관련 특허 16건 출원과
                  혁신성장유형 벤처인증 취득 등의 성과를 바탕으로 대외적으로
                  기술력을 검증받았습니다.
                </p>
                <p>
                  스팩스페이스의 연구와 노력으로 혁신적이고 탁월한 AI 솔루션을
                  제공하고있습니다. 스팩스페이스의 히스토리에서 성장과 발전을
                  자세히 살펴볼 수 있습니다. 같이 나아가며 성장하는 여정에
                  함께해주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-20">
        {historyData.map((e, idx) => (
          <div className={` ${idx % 2 === 1 ? '' : ''} `}>
            <History key={idx} year={e.year} idx={idx} events={e.events} />
            <div className="my-20" />
          </div>
        ))}
      </section>
    </main>
  );
}
