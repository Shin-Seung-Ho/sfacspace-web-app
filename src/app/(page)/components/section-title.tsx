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
      <p className="text-BM12 text-[#47BFEF] mobile:text-BM24">SFACSPACE</p>
      <h3
        className={` whitespace-pre-line break-keep text-black ${textWhite === true && 'text-white'} ${titlefont ? 'text-HB80 font-extrabold' : 'font-preSemiBold text-BB24 max-mobile:font-bold mobile:text-HB60'}`}
      >
        {title}
      </h3>
      <h6
        className={`whitespace-pre-line text-BR12 font-normal mobile:text-[20px] mobile:font-normal ${textWhite === true && 'text-white'}`}
      >
        {descripstion}
      </h6>
    </div>
  );
}
