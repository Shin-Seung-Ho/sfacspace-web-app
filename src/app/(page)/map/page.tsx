import Image from 'next/image';
import React from 'react';

export default function CompanyMap() {
  return (
    <main className="bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 py-10 text-white mobile:py-16">
        <p className=" py-3 text-BB20 mobile:py-5 mobile:text-[32px] mobile:font-bold">
          오시는길
        </p>
        <div className="h-px w-full bg-gradient-to-r from-black via-[#73B8F7] to-black opacity-70" />
        <p className=" py-3 text-[14px] text-[#9D9D9D] max-mobile:font-normal mobile:py-5 mobile:text-BR20">
          서울특별시 강서구 마곡중앙2로 11 305호
        </p>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8667859169545!2d126.82548617640568!3d37.55820222460512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c60fbfe7483%3A0x1542cc622becb1b9!2z7ISc7Jq47Yq567OE7IucIOqwleyEnOq1rCDrp4jqs6HspJHslZky66GcIDEx!5e0!3m2!1sko!2skr!4v1713850602990!5m2!1sko!2skr"
          width="600"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className=" w-full rounded-3xl max-mobile:px-4"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex w-full flex-col gap-16 py-16 mobile:gap-24 mobile:py-28">
          <div className="flex flex-col items-center gap-5 mobile:flex-row mobile:items-start mobile:gap-24">
            <Image src="/map/bus.svg" width={180} height={0} alt="bus" />
            <div className="flex flex-col gap-6 max-mobile:items-center max-mobile:text-center">
              <p className="text-BB20 mobile:text-HB28 mobile:font-bold">
                버스로 오시는길
              </p>
              <div className="flex flex-col gap-3 max-mobile:items-center">
                <p className="text-BB20 max-mobile:text-[14px] max-mobile:font-medium">
                  마곡엠밸리14단지아파트 | 마곡엠밸리15단지아파트(도보5분)
                </p>
                <div className=" flex flex-col gap-3">
                  <div className="flex items-center gap-1">
                    <p className="rounded-sm bg-[#46AF1B] p-1 text-BM12 mobile:text-BB16">
                      지선
                    </p>
                    <p>6630, 6632, 6642</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="rounded-sm bg-[#02AFBD] p-1 text-BM12 mobile:text-BB16">
                      일반
                    </p>
                    <p>388</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-BB20 max-mobile:text-[14px] max-mobile:font-medium">
                  마곡엠밸리14단지
                </p>
                <div className="flex items-center gap-1">
                  <p className="rounded-sm bg-[#46AF1B] p-1 text-BM12 mobile:text-BB16">
                    마을
                  </p>
                  <p>강서05-1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 mobile:flex-row mobile:items-start mobile:gap-24">
            <Image src="/map/subway.svg" width={180} height={0} alt="subway" />
            <div className="flex flex-col gap-6">
              <p className="text-BB20 font-bold max-mobile:text-center mobile:text-HB28">
                지하철로 오시는길
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 max-mobile:justify-center">
                  <div className="flex items-center gap-2 rounded-sm bg-[#924BDD] p-2 text-BM14 mobile:text-BB20">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white p-1 text-[#924BDD] mobile:h-5 mobile:w-5">
                      <p>5</p>
                    </div>
                    <p className="max-mobile:text-BM14">
                      5호선(방화방면) 마곡역
                    </p>
                  </div>
                  <p className="text-BB20">5번 출구</p>
                </div>
                <p className="text-BR14 mobile:text-BR20">
                  마곡엠밸리 15단지 맞은편 이마트24 건물 3층
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 max-mobile:px-5 mobile:flex-row mobile:items-start mobile:gap-24">
            <Image src="/map/car.svg" width={180} height={0} alt="car" />
            <div className="flex flex-col gap-8">
              <p className="text-BB20 font-semibold max-mobile:text-center mobile:text-HB28 mobile:font-bold">
                승용차로 오시는길
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-BB16 mobile:text-BB20">
                  한강남쪽에서 오실 때
                </p>
                <p className="text-BR14 text-[#9D9D9D] mobile:text-BR20">
                  시장로 부흥오거리 계양IC 방면 {`>`} 장제로 계양 IC 방면 {`>`}{' '}
                  부평북로 삼산도서관 부평IC 방면(고가도로) {`>`} 봉오대로
                  계양체육관 서울, 부천 방면 {`>`} 봉오대로 고가도로 {`>`}{' '}
                  오정로 김포공항 방면 {`>`} 방화대로 방화동 방면 {`>`} 발산로
                  발산역 방면 {`>`} 마곡중앙1로 이화의료원 방면
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-BB16 mobile:text-BB20">강북에서 오실 때</p>
                <p className="text-BR14 text-[#9D9D9D] mobile:text-BR20">
                  한천로 139길 {`>`} 도봉로87길 {`>`} 도봉로 {`>`} 동소문로
                  길음역 방면 {`>`} 정릉로 정릉입구 방면 {`>`} 내부순환로 방면{' '}
                  {`>`} 내부순환로 강변북로 인천공항 방면 {`>`} 강변북로
                  월드컵대교(안양) 강변북로(일산) 인청공항 방면 {`>`} 강변북로
                  안양 방면 {`>`} 올림픽대로 양화교 올림픽대로 방면 {`>`}{' '}
                  공항대로 {`>`} 마곡중앙로 강서운전면허시험장 방면 {`>`}{' '}
                  마곡중앙2로 이화의료원 방면
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
