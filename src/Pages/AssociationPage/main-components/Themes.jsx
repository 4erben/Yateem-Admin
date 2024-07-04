import React from 'react'
import { IoIosColorPalette } from 'react-icons/io'

export default function Themes() {
  return (  
    <>
        <div className="card-body">
            <div className="clearfix"> 
                يمكنك أختيار الألوان الخاصة بلوحة التحكم من خلال رابط تعديل بيانات الجمعية
            </div>
            <hr/>
            <dl className="row mb-3">
                <dt className="col-sm-3">
                    <IoIosColorPalette />
                    الوان لوحة التحكم
                </dt>
            </dl>
        </div>
        <div className="card-body">
                            <div className="clearfix"> يمكنك أختيار الألوان الخاصة بالموقع الإلكتروني من خلال رابط تعديل
                                بيانات الجمعية</div>
                            <hr/>
                            <dl className="row mb-3">
                                <dt className="col-sm-3">
                                    <IoIosColorPalette />
                                     الوان الموقع الإلكتروني
                                </dt>
                                <dd className="col-sm-9">
                                </dd>
                            </dl>
                        </div>
    </>
    )
}
