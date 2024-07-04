import React from 'react'

export default function Cats() {
  return (
    <div className="card-body">
    <div className="form-group">
        <div className="table-responsive">
            <table id="tblShares" className="table table-xs table-striped table-bordered table-hover ">
                <thead>
                    <tr className="bg-undefined">
                        <th>#</th>
                        <th>الاسم</th>
                        <th>رابط خارجي</th>
                        <th>الترتيب</th>
                        <th>الحالة</th>
                    </tr>
                </thead>
                <tbody>
                            <tr>
                                <th>1</th>
                                <th>عام</th>
                                <th>
                                </th>
                                <th>0</th>
                                <th>
                                        <span className="badge-2 bg-success">مفعل </span>
                                </th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th>مباني </th>
                                <th>
                                </th>
                                <th>0</th>
                                <th>
                                        <span className="badge-2 bg-success">مفعل </span>
                                </th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th>سقياء ماء </th>
                                <th>
                                </th>
                                <th>0</th>
                                <th>
                                        <span className="badge-2 bg-success">مفعل </span>
                                </th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <th>كفالات </th>
                                <th>
                                </th>
                                <th>0</th>
                                <th>
                                        <span className="badge-2 bg-success">مفعل </span>
                                </th>
                            </tr>
                            <tr>
                                <th>5</th>
                                <th>الفقراء</th>
                                <th>
                                </th>
                                <th>0</th>
                                <th>
                                        <span className="badge-2 bg-success">مفعل </span>
                                </th>
                            </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}
