import React from "react";

function Description() {
  return (
    <section className="px-[50px] md:px-[135px] my-[120px]">
      {/* Upper Heading and Button */}
    <div className="flex md:flex-row flex-col gap-5 ">
      <button
          className="bg-[#FF9F0D] px-5 py-2 text-[12px] md:text-[16px] hover:bg-[#ffaf37] hover:text-white 
                    flex justify-center items-center transition-transform duration-200 ease-in transform hover:scale-105">
                        Description
        </button>
      {/* For Arrow Buttons */}
      <div className="flex gap-5">
      <h2 className="text-[16px] md:text-[16px] text-center md:mt-[5px] mt-0  whitespace-nowrap md:whitespace-normal font-normal">
      Reviews (24)
      </h2>
      </div>
    </div>

    <div className="flex flex-col gap-[24px] mt-[45px]">
        <p className="text-[12px] md:text-[16px] font-normal text-[#828282]">Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
    
        <p className="text-[12px] md:text-[16px] font-normal text-[#828282]">Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>
    
        <h2 className="text-[16px] md:text-[18px] font-normal text-[#4F4F4F ]">Key Benifits</h2>

        <ul className="list-disc text-[12px] md:text-[16px] font-normal text-[#828282] flex flex-col gap-[8px] px-4">
            <li >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
            <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
            <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
            <li>Mauris eget diam magna, in blandit turpis.</li>
        </ul>
    </div>
    </section>
  );
}

export default Description;
