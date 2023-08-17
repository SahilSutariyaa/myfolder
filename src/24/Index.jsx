
// import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'



const Index = () => {
    const [count, setCount] = useState(0)


    const data = [
        {
            title: "quidem molestiae enim",
            content: " quidem molestiae enim quidem molestiae enim quidem molestiae enim"
        },
        {
            title: "sunt qui excepturi placeat culpa",
            content: "omnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odio"
        },
        {
            title: "omnis laborum odio",
            content: "sunt qui excepturi placeat culpasunt qui excepturi placeat culpasunt qui excepturi placeat culpa"
        },
        {
            title: "eaque aut omnis a",
            content: "eaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis a"
        },
        {
            title: "qui fuga est a eum",
            content: "qui fuga est a eumqui fuga est a eumqui fuga est a eumqui fuga est a eumqui fuga est a eum"
        },
        {
            title: "distinctio laborum qui",
            content: "distinctio laborum quidistinctio laborum quidistinctio laborum quidistinctio laborum qui"
        },
        {
            title: "consequatur autem doloribus natus consectetur",
            content: "consequatur autem doloribus natus consecteturconsequatur autem doloribus natus consecteturconsequatur autem doloribus natus consecteturconsequatur autem doloribus natus consectetur"
        },
        {
            title: "nesciunt quia et doloremque",
            content: "nesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremque"
        }
    ];


    const clickToNext = () => {
        setCount(count + 1)
    }
    const clickTopreviuse = () => {
        setCount(count - 1)
    }
    const clickToreset = () => {
        setCount([0])

    }
    return (

        <div className='container mt-4'>
            <div className="card">
                <div className="card-header">
                    <div className='d-flex justify-content-around'>
                        <button
                            onClick={ clickTopreviuse }
                            type="button"
                            className={ count === 0 ? "btn btn-success disabled" : "btn btn-success" }>
                            Prev
                        </button>
                        <button
                            onClick={ clickToreset }
                            type="button" className="btn btn-secondary">Reset</button>
                        <button
                            onClick={ clickToNext }
                            type="button"
                            className={ count === 7 ? "btn btn-success disabled" : "btn btn-success" }>
                            Next
                        </button>
                    </div>
                </div>

                <h5 className="card-title">{ count + 1 }. { data[count].title }</h5>
                <p className="card-text">{ count + 1 }.{ data[count].content }</p>

            </div>
        </div >

    )
}

export default Index
