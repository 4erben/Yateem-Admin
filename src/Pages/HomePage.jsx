import React from 'react'
import { Col, Container, Row} from 'react-bootstrap';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis ,Tooltip, ResponsiveContainer, Brush} from "recharts";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


export default function HomePage() {
  const data = [
    { date: '2024-06-01', value: 120 },
    { date: '2024-06-02', value: 130 },
    { date: '2024-06-03', value: 140 },
    { date: '2024-06-04', value: 150 },
    { date: '2024-06-05', value: 160 },
    { date: '2024-06-06', value: 170 },
    { date: '2024-06-07', value: 180 },
    { date: '2024-06-08', value: 190 },
    { date: '2024-06-09', value: 200 },
    { date: '2024-06-10', value: 210 }
  ];
  const statsData = [
    {
        no: 451723407230,
        donatorName: "",
        phoneNo: 966562110906,
        donationNo: 1,
        donationMethod: "بطاقة ائتمانية",
        date: "20/06/2024 04:04 ص",
        donationLink: ""
    },
    {
        no: 451723407231,
        donatorName: "",
        phoneNo: 966562110907,
        donationNo: 2,
        donationMethod: "بطاقة ائتمانية",
        date: "21/06/2024 04:05 ص",
        donationLink: ""
    },
    {
        no: 451723407232,
        donatorName: "",
        phoneNo: 966562110908,
        donationNo: 3,
        donationMethod: "بطاقة ائتمانية",
        date: "22/06/2024 04:06 ص",
        donationLink: ""
    },
    {
        no: 451723407233,
        donatorName: "",
        phoneNo: 966562110909,
        donationNo: 4,
        donationMethod: "بطاقة ائتمانية",
        date: "23/06/2024 04:07 ص",
        donationLink: ""
    },
    {
        no: 451723407234,
        donatorName: "",
        phoneNo: 966562110910,
        donationNo: 5,
        donationMethod: "بطاقة ائتمانية",
        date: "24/06/2024 04:08 ص",
        donationLink: ""
    },
    {
        no: 451723407235,
        donatorName: "",
        phoneNo: 966562110911,
        donationNo: 6,
        donationMethod: "بطاقة ائتمانية",
        date: "25/06/2024 04:09 ص",
        donationLink: ""
    },
    {
        no: 451723407236,
        donatorName: "",
        phoneNo: 966562110912,
        donationNo: 7,
        donationMethod: "بطاقة ائتمانية",
        date: "26/06/2024 04:10 ص",
        donationLink: ""
    },
    {
        no: 451723407237,
        donatorName: "",
        phoneNo: 966562110913,
        donationNo: 8,
        donationMethod: "بطاقة ائتمانية",
        date: "27/06/2024 04:11 ص",
        donationLink: ""
    },
    {
        no: 451723407238,
        donatorName: "",
        phoneNo: 966562110914,
        donationNo: 9,
        donationMethod: "بطاقة ائتمانية",
        date: "28/06/2024 04:12 ص",
        donationLink: ""
    },
    {
        no: 451723407239,
        donatorName: "",
        phoneNo: 966562110915,
        donationNo: 10,
        donationMethod: "بطاقة ائتمانية",
        date: "29/06/2024 04:13 ص",
        donationLink: ""
    }
];
  return (
    <Container fluid className='px-0  my-0 '>
      {/* Main  */}
      <Container fluid className='px-5 '>
      {/* Brief Stats */}
      <Row className='stat-container '>
      <p>ملخص الاحصائيات</p>
        <Col md={4} lg={4} className='d-flex stat-card justify-content-around mb-2 text-center'>
          <span className='ms-2'><i className="fa-solid fa-users display-4 text-success "></i></span>
          <div>
            <p>متبرعين الشهر الحالي</p>
            <p className='text-secondary'>79</p>
          </div>
        </Col>
        <Col md={4} lg={4} className='d-flex stat-card justify-content-around mb-2 text-center'>
        <span className='ms-2'><i className="fa-solid fa-coins display-4 text-info "></i></span>
          <div>
            <p>تبرعات الشهر الحالي</p>
            <p className='text-secondary'>3,701</p>
          </div>
        </Col>
        <Col md={4} lg={4} className='d-flex stat-card justify-content-around mb-2 text-center'>
        <span className='ms-2'><i className="fa-solid fa-dollar-sign display-4 text-indigo-400 "></i></span>
          <div>
            <p>اجمالي مبلغ التبرعات</p>
            <p className='text-secondary'>106,069</p>
          </div>
        </Col>
        <Col md={4} lg={4} className='d-flex stat-card justify-content-around mb-2 text-center'>
        <span className='ms-2'><i className="fa-solid fa-user display-4 text-warning "></i></span>
          <div>
            <p>اجمالي المتبرعين</p>
            <p className='text-secondary'>922</p>
          </div>
        </Col>
        <Col md={4} lg={4} className='d-flex stat-card justify-content-around mb-2 text-center'>
        <span className='ms-2'><i className="fa-solid fa-user display-4 text-indigo-800 "></i></span>
          <div>
            <p>اجمالي تبرعات في انتظار المراجعة</p>
            <p className='text-secondary'>0</p>
          </div>
        </Col>
        <Col md={4} lg={4} className='d-flex stat-card justify-content-around mb-2 text-center'>
        <span className='ms-2'><i className="fa-solid fa-percent display-4 text-info "></i></span>
          <div>
            <p>نسبة تحقيق المستهدف</p>
            <p className='text-secondary'>4</p>
          </div>
        </Col>
      </Row>
      {/* Stat Chart */}
      <Row className=''>
        <Col className='col-12'>
        <p>الفترة</p>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <select className='w-100'>
            <option>اسبوع</option>
            <option>اسبوعين</option>
            <option>شهر</option>
            <option>3 شهور </option>
          </select>
        </Col>
        <Col className='col-12 my-4 bg-white rounded rounded-3 fs-8 '>
        <ResponsiveContainer width="100%" height={250} className="my-4">
        <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="#8884d822"  dot={{ stroke: '#8884d8', strokeWidth: 2 }}/>
          <Brush dataKey="date" height={30} stroke="#8884d8"/>
      </AreaChart>
      </ResponsiveContainer>
        </Col>
      </Row>
      {/* Stat Table */}
      <Row className=''>
        <Col className='col-12 stat-table rounded py-4 px-4'>
        <h6 className='mb-4 '>اخر عمليات التبرع</h6>
          <table className='table text-center  mx-0 fs-8'>
            <thead className=''>
              <tr role='row' className=''>
              <th className='sorting_asc fw-light' rowSpan={1} colSpan={1}>رقم العملية</th>
              <th rowSpan={1} colSpan={1} className='fw-light'>اسم المتبرع</th>
              <th rowSpan={1} colSpan={1} className='fw-light'>رقم الهاتف</th>
              <th rowSpan={1} colSpan={1} className='fw-light'>مبلغ التبرع</th>
              <th rowSpan={1} colSpan={1} className='fw-light'>طريقة التبرع</th>
              <th rowSpan={1} colSpan={1} className='fw-light'>التاريخ</th>
              <th rowSpan={1} colSpan={1} className='fw-light'>ايصال التبرع</th>
              </tr>
            </thead>
            <tbody>
              {statsData.map((stat)=>{
                return(
                  <tr key={stat.no}>
                    <td>{stat.no}</td>
                    <td>{stat.donatorName}</td>
                    <td>{stat.phoneNo}</td>
                    <td>{stat.donationNo}</td>
                    <td>{stat.donationMethod}</td>
                    <td>{stat.date}</td>
                    <td><i className="fa-solid fa-print  text-primary"></i></td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </Col>
      </Row>
      </Container>
    </Container>
  )
}
