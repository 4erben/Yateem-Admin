import { CgWebsite } from "react-icons/cg";
import { IoIosLink, IoMdHome, IoMdLink } from "react-icons/io";
import { FaArrowRight, FaCommentSms, FaDollarSign, FaEnvelope, FaFlagCheckered, FaFolder, FaQuestion, FaRegEnvelope, FaTableCells, FaUsers, FaViacoin } from "react-icons/fa6";
import { FaCommentAlt, FaExpandArrowsAlt, FaRegEdit, FaRegQuestionCircle } from "react-icons/fa";
import { LuShrink } from "react-icons/lu";
import { GrArticle, GrGallery } from "react-icons/gr";
import { CiBitcoin, CiDollar, CiGift, CiSettings, CiShoppingCart } from "react-icons/ci";
import { HiDocumentAdd } from "react-icons/hi";
import { HiDocumentRemove } from "react-icons/hi";
import { MdArticle, MdEditDocument, MdOutlineArticle, MdOutlineQueryStats } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BiSolidCoinStack } from "react-icons/bi";
import { BsDatabaseFillDown, BsFillPeopleFill } from "react-icons/bs";
import { LiaComments } from "react-icons/lia";
import { IoDocuments, IoPhonePortraitSharp, IoQrCodeOutline, IoSettings } from 'react-icons/io5';
import { RxIconjarLogo } from "react-icons/rx";
import { ImCoinPound } from "react-icons/im";
import { RiArrowUpSLine } from "react-icons/ri";

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
        title: "المشروعات الحالية",
        icon :  <IoDocuments />,
        link : "/projects"
    },
    {
        title: "اضافة مشروع",
        icon: <HiDocumentAdd />,
        link : "/projects/add"
    },
    
]
const giftsMenu = [
    {
        title: "الاهداءات الحالية",
        icon: <IoDocuments />,
        link : "/gifts"
    },
    {
        title: "اضافة اهداء",
        icon :  <HiDocumentAdd />,
        link : "/gifts/add"
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
        link : "/donations/listDonationDetails"
    },
    {
        title: "تقرير المشرف المالي",
        icon :  <CiBitcoin />,
        link : "/donations/financialReport"
    },
    {
        title: "الاستقطاعات",
        icon :  <ImCoinPound />,
        link : "/donations/billsDeduction"
    },
    {
        title: "التقارير المطلوبة",
        icon :  <BsDatabaseFillDown />,
        link : "/donations/requiredReports"
    },
]
const transfersMenu = [
    {
        title: "ادارة التحويلات",
        icon: <FaFolder />,
        link : "/donationTransfers"
    },
]
const donorsMenu = [
    {
        title: "المتبرعين الحاليين",
        icon: <FaUsers/>,
        link : "/donors"
    },
]

const commentsMenu = [
    {
        title: "التعليقات",
        icon: <FaTableCells />,
        link : "/comments"
    },
    {
        title: "التقييمات",
        icon: <RiArrowUpSLine />,
        link : "/comments/ratings"
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
        title: "المنسقين",
        icon: <BsFillPeopleFill />,
        link : "/affiliate/affiliateUsers"
    },
    {
        title: "الروابط الحالية",
        icon: <IoMdLink />,
        link : "/affiliate"
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
        link : "/association",
    },
    {
        title: "تعديل بياناتي",
        icon: <FaRegEdit />,
        link : "/association/edit",
    }
]

export default { websiteMenu , projectsMenu  , giftsMenu , donationsMenu , transfersMenu , donorsMenu , commentsMenu , messagesMenu , adsMenu ,reqMenu ,supportMenu , associationMenu};