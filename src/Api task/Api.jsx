/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
// import Style from './Api.module.css'

const Api = () => {
    const [allData, setAllData] = useState([]);
    const [count, setCount] = useState(0)
    const [fdata, setFdata] = useState(0)
    const [ldata, setLdata] = useState(25)
    const [page, setPage] = useState(1)


    useEffect(() => {
        const fechData = async () => {
            fetch("https://jsonplaceholder.typicode.com/comments", {
                method: "GET"
            })
                .then(res => res.json())
                .then((data) => {
                    setAllData(data);
                    // console.log(data);
                    setCount(data.length / 25)
                })
        }
        fechData()
    }, [])
    const clickTodata = (id) => {
        const number = allData.length;
        const sahil = number / 20;
        const sutariya = sahil * id
        setLdata(sutariya)
        setFdata(sutariya - 25)
        setPage(id)
    }
    const Previous = () => {
        if (page != 1) {
            clickTodata(page - 1)
        }
    }
    const Next = () => {
        if (allData.length > ldata) {
            clickTodata(page + 1)
        }
    }
    return (
        <>

            <div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li className={ page === 1 ? "page-item disabled" : "page-item" } onClick={ Previous }><a class="page-link" href="#">Previous</a></li>
                        {
                            Array.from({ length: count }, (ele, index) => {
                                return (
                                    <li className={ page === index + 1 ? `page-item active` : `page-item` } key={ index + 1 } onClick={ () => clickTodata(index + 1) }><a class="page-link" href="#">{ index + 1 }</a></li>

                                )
                            })
                        }
                        <li className={ page === 20 ? "page-item disabled" : "page-item" } onClick={ Next }><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            allData.slice(fdata, ldata).map((ele, index) => {
                                return (
                                    <tr key={ index }>
                                        <th>{ ele.id }.</th>
                                        <th>{ ele.name }</th>
                                        <th>{ ele.email }</th>
                                        <th>{ ele.body }</th>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div >
        </>
    )
}

export default Api
