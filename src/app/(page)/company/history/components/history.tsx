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
        <p className="text-HB60 font-bold text-[#47BFEF]">{year}</p>
        {events.map((event, index) => (
          <div key={index} className="flex items-start gap-20">
            <p className="text-HB28">{event.month}</p>
            <div>
              {event.descriptions.map((description, j) => (
                <div key={j} className="mt-4">
                  {typeof description === 'string' ? (
                    <p className="text-BM16 font-semibold">{description}</p>
                  ) : (
                    description.content.map((item: string, i: number) => (
                      <p key={i} className="text-BM16">
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
