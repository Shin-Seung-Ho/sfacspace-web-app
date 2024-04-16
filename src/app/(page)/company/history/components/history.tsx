/* eslint-disable react/no-array-index-key */
interface Event {
  month: string;
  descriptions: (string | { content: string[] })[];
}

interface HistoryProps {
  idx: number;
  year: number;
  events: Event[];
}

export default function History({ idx, year, events }: HistoryProps) {
  return (
    <div
      className={`flex ${idx % 2 === 1 ? 'flex-row-reverse' : 'flex-row text-right'}`}
    >
      <div className="flex w-1/2 flex-col gap-12 px-2">
        <p className="text-HB60 font-bold text-[#47BFEF]">{year}</p>
        {events.map((event, index) => (
          <div key={index}>
            <p className="text-HB28">{event.month}</p>
            {event.descriptions.map((description, j) => (
              <div key={j} className="mt-4">
                {typeof description === 'string' ? (
                  <p className="text-BM16 font-bold">{description}</p>
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
        ))}
      </div>
      {idx % 2 === 0 && (
        <div className="flex flex-col items-center py-4">
          <div className=" h-4 w-4 rounded-full bg-[#47BFEF]" />
          <div className="h-full w-1 bg-gradient-to-b from-[#47BFEF] to-white" />
        </div>
      )}
      {idx % 2 === 1 && (
        <div className="flex flex-col items-center py-4">
          <div className=" h-4 w-4 rounded-full bg-[#47BFEF]" />
          <div className="h-full w-1 bg-gradient-to-b from-[#47BFEF] to-white" />
        </div>
      )}
    </div>
  );
}
