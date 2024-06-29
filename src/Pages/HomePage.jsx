import React from 'react'
import { Col, Container, Row} from 'react-bootstrap';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis ,Tooltip, ResponsiveContainer, Brush} from "recharts";
import { useSelector } from 'react-redux';


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
const stats = useSelector(state=>state.stats.stats);

const payments = useSelector(state=>state.stats.payments);
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
            <p className='text-secondary'>{stats?.current_month_donors}</p>
          </div>
        </Col>
        <Col md={4} lg={4} className='d-flex stat-card justify-content-around mb-2 text-center'>
        <span className='ms-2'><i className="fa-solid fa-coins display-4 text-info "></i></span>
          <div>
            <p>تبرعات الشهر الحالي</p>
            <p className='text-secondary'>{stats?.current_month_donations}</p>
          </div>
        </Col>
        <Col md={4} lg={4} className='d-flex stat-card justify-content-around mb-2 text-center'>
        <span className='ms-2'><i className="fa-solid fa-dollar-sign display-4 text-indigo-400 "></i></span>
          <div>
            <p>اجمالي مبلغ التبرعات</p>
            <p className='text-secondary'>{stats?.total_donations}</p>
          </div>
        </Col>
        <Col md={4} lg={4} className='d-flex stat-card justify-content-around mb-2 text-center'>
        <span className='ms-2'><i className="fa-solid fa-user display-4 text-warning "></i></span>
          <div>
            <p>اجمالي المتبرعين</p>
            <p className='text-secondary'>{stats?.total_donors}</p>
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
            <p className='text-secondary'>{stats?.target_achieved_percentage}</p>
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
              {payments?.map((stat)=>{
                return(
                  <tr key={stat.id}>
                    <td>{stat.id}</td>
                    <td>{stat.name_on_card}</td>
                    <td>{stat.phone}</td>
                    <td>{stat.amount}</td>
                    <td>{stat.card_number}</td>
                    <td>{stat.created_at}</td>
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
