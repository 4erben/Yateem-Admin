import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function TableComponent({data}) {
  return (
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
              {data?.map((stat)=>{
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
  )
}
