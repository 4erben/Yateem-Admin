import React from 'react'
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
                    <a 
                      href="javascript:LoadBankAccountForm('1772')" 
                      className="btn btn-success mx-2 text-white" 
                      title="تعديل"
                    >
                      تعديل
                    </a>
                    <a 
                      href="javascript:DeleteBankAccount('1772')" 
                      className="btn btn-danger mx-2 text-white" 
                      title="حذف"
                    >
                      حذف
                    </a>
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
