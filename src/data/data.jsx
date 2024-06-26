import { CgWebsite } from "react-icons/cg";
import { IoIosLink, IoMdHome, IoMdLink } from "react-icons/io";
import { FaArrowRight, FaCommentSms, FaDollarSign, FaEnvelope, FaFlagCheckered, FaFolder, FaQuestion, FaRegEnvelope, FaViacoin } from "react-icons/fa6";
import { FaCommentAlt, FaExpandArrowsAlt, FaRegEdit, FaRegQuestionCircle } from "react-icons/fa";
import { LuShrink } from "react-icons/lu";
import { GrArticle, GrGallery } from "react-icons/gr";
import { CiBitcoin, CiDollar, CiGift, CiSettings, CiShoppingCart } from "react-icons/ci";
import { HiDocumentAdd } from "react-icons/hi";
import { HiDocumentRemove } from "react-icons/hi";
import { MdArticle, MdEditDocument, MdOutlineArticle, MdOutlineQueryStats } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BiSolidCoinStack } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { LiaComments } from "react-icons/lia";
import { IoPhonePortraitSharp, IoQrCodeOutline, IoSettings } from 'react-icons/io5';
import { RxIconjarLogo } from "react-icons/rx";

const websiteMenu = [
    {
        title: "البانر الرئيسي",
        icon: <GrArticle/>,
        link: "/website/banner"
    },
    {
      title: "اللوجو",
      icon : <RxIconjarLogo />,
      link : "/website/logo"  
    },
    {
        title: "صفحات الموقع",
        icon: <GrArticle/>,
        link: "/website/portalPages"
    },
    {
        title: "اعدادات رئيسية",
        icon: <CiSettings />,
        link: "/website/settings"
    },
    {
        title: "ترتيب عناصر الرئيسية",
        icon: <CiSettings />,
        link: "/website/arrange"
    },
    {
        title: "التبرع بالرسائل النصية",
        icon: <FaCommentSms />,
        link: "/website/sms"
    },
    {
        title: "احصائيات الرئيسية",
        icon: <FaDollarSign />,
        link: "/website/stats"
    },
    {
        title: "قالوا عنا",
        icon: <FaDollarSign />,
        link: "/website/saidaboutus"
    },
    {
        title: "شركاؤنا",
        icon: <MdArticle />,
        link: "/website/partners"
    },
    {
        title: "النوافذ المنبثقة",
        icon: <GrGallery />,
        link: "/website/gallery"
    },
    {
        title: "انشاء Qr Code",
        icon: <IoQrCodeOutline />,
        link: "/website/qrCode"
    },
]
const projectsMenu = [
    {
        title: "اضافة مشروع",
        icon: <HiDocumentAdd />,
        link : "/carts/add"
    },
    {
        title: "حذف مشروع ",
        icon :  <HiDocumentRemove />,
        link : "/carts/remove"
    },
    {
        title: "تعديل مشروع",
        icon :  <MdEditDocument />,
        link : "/carts/edit"
    }
]
const giftsMenu = [
    {
        title: "الاهداءات الحالية",
        icon: <HiDocumentAdd />,
        link : "/gifts/add"
    },
    {
        title: "اضافة اهداء",
        icon :  <HiDocumentRemove />,
        link : "/gifts/remove"
    },
    {
        title: "تعديل اهداء",
        icon :  <MdEditDocument />,
        link : "/gifts/edit"
    }
]
const donationsMenu = [
    {
        title: "عمليات التبرع",
        icon: <BiSolidCoinStack />,
        link : "/donations"
    },
    {
        title: "تقرير التبرعات التفصيلي",
        icon :  <FaViacoin />,
        link : "/donations/details"
    },
    {
        title: "تقرير المشرف المالي",
        icon :  <CiBitcoin />,
        link : "/donations/financial"
    }
]
const transfersMenu = [
    {
        title: "ادارة التحويلات",
        icon: <FaFolder />,
        link : "/transfers"
    },
]
const donorsMenu = [
    {
        title: "المتبرعين الحاليين",
        icon: <BsFillPeopleFill/>,
        link : "/donors"
    },
]

const commentsMenu = [
    {
        title: "التعليقات",
        icon: <LiaComments />,
        link : "/comments"
    },
]

const messagesMenu = [
    {
        title: "ارسال رسالة جماعية",
        icon: <FaEnvelope />,
        link : "/messages/send"
    },
    {
        title: "رصيد نقاط خدمات المتجر",
        icon: <CiDollar />,
        link : "/messages/balance"
    },
    {
        title: "المراسلات السابقة",
        icon: <IoPhonePortraitSharp />,
        link : "/messages"
    },
    
]
const reqMenu = [
    {
        title: "الشكاوي والاقتراحات",
        icon: <FaQuestion />,
        link : "/request/questions"
    },
    {
        title: "طلبات المشاريع",
        icon: <GrArticle/>,
        link : "/request"
    },
    {
        title: "الروابط  المؤرشفة",
        icon: <CiSettings />,
        link : "/request/continus"
    },
    
]
const adsMenu = [
    {
        title: "الروابط الحالية",
        icon: <IoMdLink />,
        link : "/affiliate"
    },
    {
        title: "المنسقين",
        icon: <BsFillPeopleFill />,
        link : "/affiliate/affiliateUsers"
    },
    {
        title: "الروابط  المؤرشفة",
        icon: <IoMdLink />,
        link : "/affiliate/archives"
    },
    
]
const supportMenu = [
    {
        title: "طلبات الدعم الفني",
        icon: <FaFlagCheckered />,
        link : "/support"
    },
    {
        title: "الاسالة الشائعة",
        icon: <FaRegQuestionCircle />,
        link : "/support/questions"
    },
    {
        title: "دليل لوحة التحكم",
        icon: <IoIosLink />,
        link : "/support/panel"
    },
    {
        title: "تحديثات النظام",
        icon: <FaRegEnvelope />,
        link : "/support/update"
    }
]
const associationMenu = [
    {
        title: "بيانات الجمعية",
        icon: <MdOutlineArticle />,
        link : "/association"
    },
    {
        title: "تعديل بياناتي",
        icon: <FaRegEdit />,
        link : "/association/edit"
    }
]

export default { websiteMenu , projectsMenu  , giftsMenu , donationsMenu , transfersMenu , donorsMenu , commentsMenu , messagesMenu , adsMenu ,reqMenu ,supportMenu , associationMenu};