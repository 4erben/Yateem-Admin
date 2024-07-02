import React from 'react'

export default function EditCats() {
  const data = [
    { id: 1, name: 'عام', order: 0, status: 'مفعل', externalLink: '' },
    { id: 2, name: 'مباني', order: 0, status: 'مفعل', externalLink: '' },
    { id: 3, name: 'سقياء ماء', order: 0, status: 'مفعل', externalLink: '' },
    { id: 4, name: 'كفالات', order: 0, status: 'مفعل', externalLink: '' },
    { id: 5, name: 'الفقراء', order: 0, status: 'مفعل', externalLink: '' },
  ];
  return (
    <div className="card-body">
      <div className="form-group">
        <div className="text-left">
          <button onClick={() => LoadAssociationProjectCatForm('0')} className="btn btn-primary">
            اضافة
          </button>
        </div>
        <br />
        <div className="table-responsive">
          <table id="tblShares" className="table table-xs table-striped table-bordered table-hover">
            <thead>
              <tr className="bg-dark">
                <th>#</th>
                <th>الاسم</th>
                <th>عرض في الصفحة الرئيسية</th>
                <th>عرض في التبرع السريع</th>
                <th>رابط خارجي</th>
                <th>الترتيب</th>
                <th>الحالة</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={item.id} className=''>
                  <th>{item.id}</th>
                  <th>{item.name}</th>
                  <th>
                    <span className="bg-success badge-2">{item.status}</span>
                  </th>
                  <th>
                    <span className="bg-success badge-2">{item.status}</span>
                  </th>
                  <th>{item.externalLink}</th>
                  <th>{item.order}</th>
                  <th>
                    <span className="bg-success badge-2">{item.status}</span>
                  </th>
                  <td className=''>
                    <div className="list-icons d-flex align-items-center">
                      <button className="btn btn-primary mx-1">
                        تعديل
                      </button>

                      <button className="btn bg-secondary text-white mx-1">
                        تعطيل
                      </button>
    
                      <button className="btn btn-danger mx-1">
                        حذف
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
