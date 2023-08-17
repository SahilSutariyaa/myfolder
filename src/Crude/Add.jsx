import React from 'react'
import Style from './Add.module.css'

const Add = (props) => {


    return (
        <>
            {/* <div className={ Style.form } >
                <form onSubmit={ props.submitData }>

                    <label
                        className='mt-5'
                        htmlFor="name">
                        Nmae:
                        <input
                            required
                            type="text"
                            id='name'
                            name='name' />
                    </label>
                    <label
                        className='mt-5'
                        htmlFor="email">
                        Email:
                        <input
                            required
                            type="text"
                            id='email'
                            name='email' />
                    </label>
                    <label
                        className='mt-4'
                        htmlFor="password">
                        Password:
                        <input
                            required
                            type="text"
                            id='password'
                            name='password' />
                    </label>
                    <label
                        className='mt-5'
                        htmlFor="textarea">
                        Textarea:
                        <textarea
                            required
                            name="textarea"
                            id="textarea"
                            cols="50"
                            rows="1">
                        </textarea>

                    </label>
                    <label className='mt-5'
                        htmlFor="gender">
                        Gender:
                        male <input
                            required
                            type="radio"
                            value={ 'male' }

                            name='gender' />
                        female <input
                            required
                            type="radio"
                            value={ 'female' }
                            name='gender' />

                    </label>
                    <br />
                    <button
                        className='mt-5'
                        type='submit'>
                        AddData
                    </button>

                </form>
            </div> */}
            <div className={ Style.form }>
                <form onSubmit={ props.submitData }>
                    <label
                        className='mt-5'
                        htmlFor="name">
                        Name:
                        <input
                            required
                            type="text"
                            id='name'
                            name='name'
                        />
                    </label>
                    <label
                        className='mt-5'
                        htmlFor="email">
                        Email:
                        <input
                            required
                            type="text"
                            id='email'
                            name='email'
                        />
                    </label>
                    <label
                        className='mt-5'
                        htmlFor="password">
                        Password:
                        <input
                            required
                            type="text"
                            id='password'
                            name='password'
                        />
                    </label>
                    <label
                        className='mt-5'
                        htmlFor="textarea">
                        Textarea:
                        <textarea
                            required
                            name="textarea"
                            id="textarea"
                            cols="30"
                            rows="1">

                        </textarea>
                    </label>
                    <label
                        className='mt-5'
                        htmlFor="gender">
                        Gender:
                        male <input
                            required
                            type="radio"
                            name='gender'

                            value={ 'male' }
                        />
                        female <input
                            required
                            type="radio"
                            name='gender'

                            value={ 'female' }
                        />
                    </label>
                    <br />
                    <button
                        className='mt-5'
                        type='submit'
                    >
                        clickToprint
                    </button>
                </form>
            </div >
        </>
    )
}

export default Add
