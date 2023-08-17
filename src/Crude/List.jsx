import React from 'react'
// eslint-disable-next-line no-unused-vars
import Style from './List.module.css'

const List = (props) => {

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>textarea</th>
                        <th>gender</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        props.allData.map((sahil, indext) => {
                            return (
                                <tr key={ indext }>
                                    <th>{ indext + 1 }</th>
                                    <th>{ sahil.name }</th>
                                    <th>{ sahil.email }</th>
                                    <th>{ sahil.password }</th>
                                    <th>{ sahil.textarea }</th>
                                    <th>{ sahil.gender }</th>
                                    <th>
                                        <button onClick={ () => props.deletData(indext) }>deletData</button>
                                        <button>editData</button>
                                    </th>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default List
