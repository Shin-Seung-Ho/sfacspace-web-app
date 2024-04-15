interface SectionTitleProps {
  title: string;
  descripstion?: string;
  textCenter?: boolean;
  textWhite?: boolean;
}

export default function SectionTitle({
  title,
  descripstion,
  textCenter,
  textWhite,
}: SectionTitleProps) {
  return (
    <div className={`flex flex-col ${textCenter === true && 'text-center'}`}>
      <p className=" font-preMedium text-BM24 text-[#47BFEF]">SFACSPACE</p>
      <h3
        className={`font-preSemiBold text-HB60 text-black ${textWhite === true && 'text-white'}`}
      >
        {title}
      </h3>
      <h6
        className={`whitespace-pre-line font-preMedium text-BM20 ${textWhite === true && 'text-white'}`}
      >
        {descripstion}
      </h6>
    </div>
  );
}
