/* eslint-disable react/no-array-index-key */
interface HighlightWordProps {
  text: string;
  highlightWords: string;
}

export default function HighlightWord({
  text,
  highlightWords,
}: HighlightWordProps) {
  const parts = text.split(new RegExp(`(${highlightWords})`, 'gi'));
  return (
    <div className="relative">
      <p className="z-50 text-HB48 font-extrabold">
        {parts.map((part, index) =>
          part.toLowerCase() === highlightWords.toLowerCase() ? (
            <span
              key={index}
              className="relative inline-block"
              style={{ zIndex: 1 }}
            >
              <span
                className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#47BFEF]"
                style={{ zIndex: -1 }}
              />
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </p>
    </div>
  );
}
