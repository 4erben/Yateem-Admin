import React from 'react'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

export default function Schedule() {
  return (
    <div class="card-body">
      <div class="form-group">
        <p class="text-primary ">
          <MdOutlineAccountBalanceWallet />
          <span className='mx-2'>الحسابات البنكية</span>
        </p>
            <div class="table-responsive">
                  <table id="tblShares" class="table table-xs table-striped table-bordered table-hover ">
                    <thead>
                      <tr class="bg-dark">
                        <th>#</th>
                        <th>البنك</th>
                        <th>الحساب</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <th>مصرف الراجحي</th>
                        <th>221608018888258</th>
                      </tr>
                    </tbody>
                    </table>
              </div>
        </div>
    </div>
  )
}
