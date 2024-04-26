import MotionDiv from '@/components/common/motion-div';

/* eslint-disable react/no-array-index-key */
interface Event {
  month: string;
  descriptions: (string | { content: string[] })[];
}

interface HistoryProps {
  year: number;
  events: Event[];
}

export default function History({ year, events }: HistoryProps) {
  return (
    <MotionDiv
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: 100, opacity: 0 }}
      transition={{ duration: 1, delay: 0 }}
      className="flex"
    >
      <div className="flex flex-col gap-12">
        <p className="mobile:text-HB60 max-mobile:px-8 text-BB24 font-bold text-[#47BFEF]">
          {year}
        </p>
        {events.map((event, index) => (
          <div
            key={index}
            className="mobile:gap-20 max-mobile:px-8 flex items-start gap-3"
          >
            <p className="mobile:text-HB28 text-BB20">{event.month}</p>
            <div>
              {event.descriptions.map((description, j) => (
                <div key={j} className="mobile:mt-4 mt-0">
                  {typeof description === 'string' ? (
                    <p className="mobile:text-BM16 mobile:font-semibold text-BR12 font-normal">
                      {description}
                    </p>
                  ) : (
                    description.content.map((item: string, i: number) => (
                      <p
                        key={i}
                        className="mobile:text-BM16 mobile:font-semibold text-BR12 font-normal"
                      >
                        ㆍ <span>{item}</span>
                      </p>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MotionDiv>
  );
}
