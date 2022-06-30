import React, { useState } from "react";
import ContentWrapper from "../../components/contentBlock/ContentWrapper";
import styles from "./createPlane.module.css";

function CreatePlane() {
  return (
    <ContentWrapper>
      <div
        className={`shadow-lg p-3 mb-5 rounded ${styles.flexible}`}>
        <form className={styles.form}>
          <div className='form-group'>
            <label htmlFor='formGroupExampleInput'>
              Введите название самолёта.
            </label>
            <input
              type='text'
              className={`form-control ${styles.input}`}
              id='formGroupExampleInput'
              placeholder='Maveric'
              name='name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='formGroupExampleInput2'>
              Укажите цену самолета.
            </label>
            <input
              type='number'
              className={`form-control ${styles.input}`}
              id='formGroupExampleInput2'
              placeholder='1230000'
              name='price'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='formGroupExampleInput3'>
              Введите описание самолета.
            </label>
            <input
              type='text'
              className={`form-control ${styles.input}`}
              id='formGroupExampleInput'
              placeholder='Something about your plane'
              name='description'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='formGroupExampleInput4'>
              Укажите вместительность самолета
            </label>
            <input
              type='text'
              className={`form-control ${styles.input}`}
              id='formGroupExampleInput2'
              placeholder='How much users can flight on this board?'
              name='capacity'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='formGroupExampleInput5'>
              Укажите цену самолета.
            </label>
            <input
              type='file'
              className={`form-control ${styles.input}`}
              id='formGroupExampleInput5'
              placeholder='Another input'
            />
          </div>
          <div className='form-group'>
            <input
              type='submit'
              className={`form-control ${styles.submit}`}
            />
          </div>
        </form>
      </div>
    </ContentWrapper>
  );
}

export default CreatePlane;
