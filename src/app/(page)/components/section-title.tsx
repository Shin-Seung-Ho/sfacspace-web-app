interface SectionTitleProps {
  title: string;
  titlefont?: boolean;
  descripstion?: string;
  textCenter?: boolean;
  textWhite?: boolean;
}

export default function SectionTitle({
  title,
  descripstion,
  titlefont,
  textCenter,
  textWhite,
}: SectionTitleProps) {
  return (
    <div className={`flex flex-col ${textCenter === true && 'text-center'}`}>
      <p className=" font-preMedium text-BM24 text-[#47BFEF]">SFACSPACE</p>
      <h3
        className={` whitespace-pre-line break-keep text-black ${textWhite === true && 'text-white'} ${titlefont ? 'text-HB80 font-extrabold' : 'font-preSemiBold text-HB60'}`}
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
