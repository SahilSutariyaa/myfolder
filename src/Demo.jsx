import React from 'react'
import Demo2 from './Demo2';
import Style from './Demo.module.css'

const Demo = () => {

    const demoapp = () => {
        var Fist_Name = document.getElementById('Fist_Name').value;
        // console.log(abc);
        var Midel_Name = document.getElementById('Midel_Name').value;
        // console.log(asd);
        var Last_Name = document.getElementById('Last_Name').value;
        // console.log(zxc);


        if (Fist_Name === "") {
            document.getElementById('Fn').style.display = "block";
        } else {
            document.getElementById('Fn').style.display = "none";

        }
        if (Midel_Name === "") {
            document.getElementById('Mn').style.display = "block";

        } else {
            document.getElementById('Mn').style.display = "none";
        }
        if (Last_Name === "") {
            document.getElementById('Ln').style.display = "block";

        } else {
            document.getElementById('Ln').style.display = "none";

            var object = {
                FistName: Fist_Name,
                MidelName: Midel_Name,
                LastName: Last_Name,
            };
            console.log(object);
        }
    }
    return (
        <>
            <div>

                <form action="" >
                    <label htmlFor="">FistName: <input type="text" id='Fist_Name' /></label> <br />
                    <span id='Fn' className={ Style.fname }>Plase Enter your FistName* </span><br /><br />

                    <label htmlFor="">MidelName: <input type="text" id='Midel_Name' /></label><br />
                    <span id='Mn' className={ Style.mname }>Plase Enter your MidelName* </span><br /><br />

                    <label htmlFor="">LastName: <input type="text" id='Last_Name' /></label><br />
                    <span id='Ln' className={ Style.lname }>Plase Enter your LastName* </span>
                </form>


                <Demo2
                    demoapp={ demoapp }
                />
            </div>
        </>
    )
}

export default Demo
