/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react'

const Box = () => {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        const Fdata = () => {
            fetch("https://jsonplaceholder.typicode.com/photos", {
                method: "GET"
            })
                .then(res => res.json())
                .then((data) => {
                    setAllData(data)
                    // console.log(data);
                })
        }
        Fdata()

    }, [])
    return (
        <>
            <div className="d-flex flex-wrap justify-content-evenly">

                {
                    allData.slice(0, 9).map((ele, index) => {
                        {/* console.log(ele.title.split(" ")[1]) */ }


                        return (
                            <div class="card mb-4 " style={ { width: "25rem" } } key={ index }>
                                <img src={ ele.url } class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h6>{ index + 1 }.</h6>
                                    <h5 class="card-title">{ ele.title.split(" ")[0] } { ele.title.split(" ")[1] }</h5>
                                    <p class="card-text">{ ele.title }</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        )
                    })


                }
            </div>

        </>
    )
}

export default Box
