import amehImg from "../../assets/about/ameh.png";
import temitayoImg from "../../assets/about/temitayo.png";
import suleimanImg from "../../assets/about/suleiman.png";
import ekechukwuImg from "../../assets/about/ekechukwu.png";
import React from "react";

export default function SuperBoard() {
    
    return (
        
        <>
            {/* <!-- Hero section --> */}
            <div className="w-full">                
                <div className="bg-[#141B34] w-full min-h-[300px] sm:min-h-[361px] flex flex-col items-center justify-center text-[#F4F4F4]" >
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-light mb-5">
                        Our Super <span className="font-medium">Board & Team</span>
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg" >
                        {`Home -> About Us -> Board of Directors`}
                    </p>
                </div>
            </div>

            <section className="py-10 md:py-14 lg:py-16 px-7 md:px-20 lg:px-[160px] xl:px-[200px]" >
                <div className="flex flex-col md:flex-row gap-10 justify-between items-center md:items-start">
                    <BoardImageCard img={amehImg} name="CSP Ameh Lydia" position="Director" />
                    <BoardImageCard img={temitayoImg} name="Temitayo Oke ACIIN" position="Managing Director/ Chief Executive Officer" />
                    <BoardImageCard img={suleimanImg} name="Ba’aba Suleiman ESQ" position="Director" />
                    <BoardImageCard img={ekechukwuImg} name="Mac Ekechukwu FIIN PHd" position="Executive Director Operations" />
                </div>
            </section>

        </>
    )
}

interface BoardImageCardProps {
  img: string;
  name: string;
  position: string;
}

const BoardImageCard: React.FC<BoardImageCardProps> = ({ img, name, position }) => {
  return (
    <div className="">
        <div className="relative w-[230px] md:w-[200px] xl:w-[230px] text-center">
            <div className="absolute bottom-0 -right-2 w-2 h-[95%] bg-[#EFEB05]"></div>
            <div className="absolute -bottom-2 -right-2 h-2 w-[95%] bg-[#1F8340]"></div>
            <img
                src={img}
                alt={name}
                className="w-full h-[250px] md:h-[200px] xl:h-[250px] object-cover"
            />
        </div>
        <div className="mt-3 lg:mt-4">
            <h4 className="text-lg lg:text-xl font-bold">{name}</h4>
            <p className="text-gray-600 text-sm lg:text-base">{position}</p>
        </div>
    </div>
  );
};
