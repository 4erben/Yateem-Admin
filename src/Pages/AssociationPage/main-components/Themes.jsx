import React from 'react'
import { IoIosColorPalette } from 'react-icons/io'

export default function Themes() {
  return (  
    <>
        <div class="card-body">
            <div class="clearfix"> 
                يمكنك أختيار الألوان الخاصة بلوحة التحكم من خلال رابط تعديل بيانات الجمعية
            </div>
            <hr/>
            <dl class="row mb-3">
                <dt class="col-sm-3">
                    <IoIosColorPalette />
                    الوان لوحة التحكم
                </dt>
            </dl>
        </div>
        <div class="card-body">
                            <div class="clearfix"> يمكنك أختيار الألوان الخاصة بالموقع الإلكتروني من خلال رابط تعديل
                                بيانات الجمعية</div>
                            <hr/>
                            <dl class="row mb-3">
                                <dt class="col-sm-3">
                                    <IoIosColorPalette />
                                     الوان الموقع الإلكتروني
                                </dt>
                                <dd class="col-sm-9">
                                </dd>
                            </dl>
                        </div>
    </>
    )
}
