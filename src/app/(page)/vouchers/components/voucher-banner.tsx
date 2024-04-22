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
    <section className="min-h-screen w-full">
      <div className="relative flex justify-center">
        <video autoPlay loop muted>
          <source src={src} />
        </video>
        <MotionDiv
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-8"
        >
          <div className="flex flex-col items-center">
            <h2 className="whitespace-pre-line text-center text-HM28 text-[#47BFEF]">
              {title}
            </h2>
            <p className="whitespace-pre-line text-center text-HM48 text-white">
              {description}
            </p>
            <Button className="mt-10 flex gap-2 rounded-full bg-[#73B8F7] px-6 text-[#131313]">
              공고문 보기 및 다운로드 <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
