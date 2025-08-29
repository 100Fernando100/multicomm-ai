import React from 'react';

export function Footer() {
  return (
    <footer className="text-lg bg-stone-50 box-border leading-[27px] pt-[22px] pb-0 md:text-[17.3571px] md:leading-[26.0357px] md:py-[21.2143px]">
      <div className="text-lg box-border gap-x-4 flex flex-col justify-end leading-[27px] max-w-[1376px] gap-y-4 w-full overflow-hidden mx-auto px-0 md:text-[17.3571px] md:gap-x-[46.2857px] md:leading-[26.0357px] md:max-w-[1326.86px] md:gap-y-[46.2857px] md:px-[23.1429px]">
        <div className="text-lg items-center box-border gap-x-4 flex flex-wrap auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-center leading-[27px] gap-y-4 pb-9 md:text-[17.3571px] md:gap-x-[15.4286px] md:flex-nowrap md:grid-cols-[1fr_1fr] md:leading-[26.0357px] md:gap-y-[15.4286px] md:pb-[34.7143px]">
          <a href="#" className="text-xl box-border block leading-[30px] text-center md:text-[17.3571px] md:leading-[26.0357px]">Multicomm.ai, Inc. © 2025</a>
        </div>
      </div>
    </footer>
  );
}
