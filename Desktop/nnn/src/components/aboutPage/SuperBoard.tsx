import amehImg from "../../assets/about/superboard/ameh.png";
import sholaImg from "../../assets/about/superboard/shola.png";
import olufemiImg from "../../assets/about/superboard/olufemi.png";
import yinkaImg from "../../assets/about/superboard/yinka.png";
import ibrahimImg from "../../assets/about/superboard/ibrahim.png";
import tundeImg from "../../assets/about/superboard/tunde.png";
import paulImg from "../../assets/about/superboard/paul.png";
import blankImg from "../../assets/about/superboard/blank.png";

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
                    {/* flex flex-col md:flex-row gap-10 justify-between items-center md:items-start */}
                    {
                        BoardMembers.map((member, index) => (
                            <BoardImageCard key={index} img={member.img} name={member.name} position={member.position} border={member.border} />
                        ))
                    }
                </div>
            </section>

        </>
    )
}

interface BoardImageCardProps {
  img: string;
  name: string;
    position: string;
    border?: boolean;
}

const BoardImageCard: React.FC<BoardImageCardProps> = ({ img, name, position, border }) => {
  return (
    <div className="">
          {/* <div className="relative w-[230px] md:w-[200px] xl:w-[230px] text-center"> */}
        <div className="relative w-full max-w-[400px] text-center">
            <div className="absolute bottom-0 -right-2 w-2 h-[95%] bg-[#EFEB05]"></div>
            <div className="absolute -bottom-2 -right-2 h-2 w-[95%] bg-[#1F8340]"></div>
            <img
                src={img}
                alt={name}
                className={`w-full max-h-[350px] lg:max-h-[400px] object-cover  ${border ? "border border-[#000000]": "" } `}
            />
        </div>
        <div className="mt-3 lg:mt-4">
            <h4 className="text-lg lg:text-xl font-bold">{name}</h4>
            <p className="text-gray-600 text-sm lg:text-base">{position}</p>
        </div>
    </div>
  );
};


const BoardMembers:BoardImageCardProps[] = [
    {
        img: olufemiImg,
        name: "Olufemi Adenaike",
        position: "Chairman",
        border:true
    },
    {
        img: amehImg,
        name: "CSP Ameh Lydia",
        position: "Director",
    },
    {
        img: sholaImg,
        name: "Shola Amore BSc.CP Rtd",
        position: "Director",
    },
    {
        img: blankImg,
        name: "AIG Suleiman .M. Abdu PhD,Mni",
        position: "Director",
    },
    {
        img: yinkaImg,
        name: "Yinka Balogun",
        position: "Director",
    },
    {
        img: ibrahimImg,
        name: "Ba’aba Ibrahim Musa ESQ",
        position: "Director",
        border: true
    },
    {
        img: tundeImg,
        name: "Tunde Akinwunmi FCA ACIT",
        position: "Independent Director"
    },
    {
        img: paulImg,
        name: "Paul-Odeli Joshua PhD",
        position: "Independent Director"
    }
]