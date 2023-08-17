import React from 'react'
import { useState } from 'react'
import Style from './Task3.module.css'

const Task3 = () => {
  const [abc, setAbc] = useState()
  const [sahil, setSahil] = useState([])
  const [data, setData] = useState('')

  const clickTodata = (e) => {
    setAbc(e.target.value)
    // console.log(e.target.value);
  }
  const clickTokey = (e) => {
    console.log(e.key);
    if (e.key == 'Enter' && data !== "") {
      console.log(abc);
      sahil[data] = abc
      setAbc('')
      setData()
    } else if (e.key == 'Enter') {
      setSahil([...sahil, abc])
      setAbc('')
    }
  }
  console.log(sahil);
  const clickTodelet = (id) => {
    const delet = sahil.filter((ele, index) => {
      return index != id
    })
    setSahil(delet)
  }
  const clickToedit = (id) => {
    setAbc(sahil[id])
    setData(id)
  }

  return (
    <>
      Nmae:
      <input
        type="text"
        value={ abc }
        id='name'
        name='name'
        onChange={ clickTodata }
        onKeyDown={ clickTokey }
      />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            sahil.map((ele, index) => {
              return (
                <tr key={ index }>
                  <th>{ index + 1 }</th>
                  <th>{ ele }</th>
                  <th>
                    <button onClick={ () => clickTodelet(index) }>
                      Delet
                    </button>
                    <button onClick={ () => clickToedit(index) }>
                      Edit
                    </button>
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

export default Task3
