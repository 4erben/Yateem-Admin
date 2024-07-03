import React, { useEffect } from 'react'
import { Col, Container, Row} from 'react-bootstrap';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis ,Tooltip, ResponsiveContainer, Brush} from "recharts";
import { useSelector } from 'react-redux';
import TableComponent from '../../Components/TableComponent';



export default function HomePage() {
  useEffect(() => {
    const error = console.error;
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};
  }, []);

  const chart = useSelector(state=>state.stats.chart);
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
        <AreaChart data={chart}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="donation_date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="amount" stroke="#8884d8" fillOpacity={1} fill="#8884d822"  dot={{ stroke: '#8884d8', strokeWidth: 2 }}/>
          <Brush dataKey="donation_date" height={30} stroke="#8884d8"/>
      </AreaChart>
      </ResponsiveContainer>
        </Col>
      </Row>
      {/* Stat Table */}
      <TableComponent data={payments} />
      </Container>
    </Container>
  )
}
