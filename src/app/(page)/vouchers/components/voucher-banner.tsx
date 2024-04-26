import { ArrowRight } from 'lucide-react';
import MotionDiv from '@/components/common/motion-div';
import { Button } from '@/components/ui/button';

interface VoucherBannerProps {
  src: string;
  title: string;
  description: string;
}

export default function VoucherBanner({
  src,
  title,
  description,
}: VoucherBannerProps) {
  return (
    <section className="relative min-h-screen w-full">
      <div className=" flex justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} />
        </video>
        <MotionDiv
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-8"
        >
          <div className="flex flex-col items-center">
            <h2 className="mobile:text-HM28 whitespace-pre-line text-center text-BM12 text-[#47BFEF]">
              {title}
            </h2>
            <p className="mobile:text-HM48 whitespace-pre-line text-center text-BB24 text-white">
              {description}
            </p>
            <Button className="mobile:mt-10 mt-6 flex gap-2 rounded-full bg-[#73B8F7] px-6 text-[#131313]">
              공고문 보기 및 다운로드 <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
