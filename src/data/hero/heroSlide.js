import Banner1 from '../../assets/hero/hero-banner-1.jpg'
import Banner2 from '../../assets/hero/hero-banner-2.jpg'
import Banner3 from '../../assets/hero/hero-banner-3.jpg'

const slideData = [
    {
        banner1: <img src={Banner1} width={270} height={300} alt="hero banner" className="img-holder one " />,
        banner2: <img src={Banner2} width={240} height={370} alt="hero banner" className="img-holder two " />,
        banner3: <img src={Banner3} alt="hero banner" className="w-[180px] h-[148px] mt-3 md:mt-5 md:w-[280px] md:h-[166px] img-holder three " />,
        btnLink: "/contact",
        btnTitle: "Discover More",
        title: 'Be a Voice for Poor People Around Us',
        subTitle: ' We are here to support you every step of the way'
    },
    {
        banner1: <img src={Banner1} width={270} height={300} alt="hero banner" className="img-holder one " />,
        banner2: <img src={Banner2} width={240} height={370} alt="hero banner" className="img-holder two " />,
        banner3: <img src={Banner3} alt="hero banner" className="w-[180px] h-[148px] mt-3 md:mt-5 md:w-[280px] md:h-[166px] img-holder three " />,
        btnLink: "/contact",
        btnTitle: "Donate Now",
        title: "We Need Your Help Save a Child's Future",
        subTitle: 'Give a helping hand for childrens of the poor'
    },
    {
        banner1: <img src={Banner1} width={270} height={300} alt="hero banner" className="img-holder one " />,
        banner2: <img src={Banner2} width={240} height={370} alt="hero banner" className="img-holder two " />,
        banner3: <img src={Banner3} alt="hero banner" className="w-[180px] h-[148px] mt-3 md:mt-5 md:w-[280px] md:h-[166px] img-holder three " />,
        btnLink: "/contact",
        btnTitle: "Need Your Hand",
        title: '  Together We Can Make a Big Difference',
        subTitle: 'The World need you. Every Good Act is a Charity'
    },
];
export default slideData;
