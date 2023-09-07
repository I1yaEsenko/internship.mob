import React from 'react';
import {Field, Form, Formik} from "formik";



export function CustomForm() {
   const initialValues = {
      name: '',
      phone: '',
      description: '',
      file: null,
      agreement: false  // Добавлено поле для чекбокса соглашения
   };

   const handleSubmit = (values:any, { setSubmitting }:any) => {
      // Обработка отправки формы
      console.log(values);
      setSubmitting(false);
   };

   return (
     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className='form__main'>
             <div className='form__box'>
                <div className='form__name'>
                   <Field type="text" id="name" name="name" placeholder='Ваше имя *' />
                </div>
                <div className='form__phone'>
                   <Field name="phoneNumber" placeholder='Номер телефона *'/>

                </div>
             </div>
             <div className='form__about'>
                <Field as="textarea" rows='1' id="description" name="description" placeholder='Расскажите немного о вашей идее' className='form__textarea'/>
             </div>
             <div className='form__download'>
                <label htmlFor="file" className='form__download-label'>Прикрепить файлы (до 10 шт)</label>
                <Field type="file" id="file" name="file" className='form__download-btn' />
                <div className='form__download-span'>Пожалуйста, загрузите файл формата: .pdf, .docx, .odt, .ods, .xls/x,.txt</div>

             </div>
             <div className='form__agreement'>
                <label>
                   <Field type="checkbox" name="agreement" className='form__checkbox' />
                 <span className='form__customCheckbox'></span>  Я принимаю <a href="#!" className="form__privacy-link privacy">Политика конфиденциальности</a>
                </label>
             </div>
             <button className='form__btn btn' type="submit" disabled={isSubmitting}>
                Отправить
             </button>
          </Form>
        )}
     </Formik>
   );
}

