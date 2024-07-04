import React from 'react'
import { Button } from 'react-bootstrap'
import { CiWallet } from 'react-icons/ci'

export default function EditSchedule() {
  return (
    <div className="card-body">
      <div className="form-group">
        <legend className="text-primary d-flex align-items-center">
        <CiWallet />
        <span className='mx-3'>الحسابات البنكية</span>
        </legend>
        <hr />
        <div className="text-left">
          <button className="btn btn-primary">اضافة حساب بنكى جديد</button>
        </div>
        <br />
        <div className="table-responsive">
          <table id="tblShares" className="table table-xs table-striped table-bordered table-hover">
            <thead>
              <tr className="bg-undefined">
                <th>#</th>
                <th>البنك</th>
                <th>الحساب</th>
                <th>IBAN</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>مصرف الراجحي</th>
                <th>221608018888258</th>
                <th>SA0680000</th>
                <td>
                  <div className="list-icons d-flex">
                    <Button className="btn btn-success mx-2 text-white">تعديل</Button>
                    <Button className="btn btn-danger mx-2 text-white" >حذف </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
