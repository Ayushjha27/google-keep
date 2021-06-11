import React, { useState } from "react";
import "./index.css";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (prop) => {
    const [exp, upExp] = useState(false);
    const [val, upVal] = useState({
        title: '',
        content: '',
    })
    const inpo = (obj) => {
        const value = obj.target.value;
        const name = obj.target.name;
        upVal((preVal) => {
            return (
                {
                    ...preVal, [name]: value,
                }
            )
        });
    };
    const genrate = () => {
        prop.passNote(val);
        upVal(() => {
            return ({
                title: '',
                content: '',
            })
        })
    }

    const expand = () => {
        upExp(true);
    }
    const expand1 = () => {
        upExp(false);
    }

    return (
        <>
            <div onDoubleClick={expand1} class="mx-auto p text-center  mt-3" style={{ width: '200px' }}>
                <form className="text-center ">
                    <div class="card shadow-lg " style={{ width: "23rem" }}>

                        <input onClick={expand} autoComplete="off" value={val.title} name="title" onChange={inpo} type="text" placeholder="Title                                     📌 📷 💡 " />

                        {exp ?
                            <div class="card-body">

                                <textarea value={val.content} name='content' onChange={inpo} className="w-100 m-0 h-100" placeholder="Enter Text..." rows="" column="" />

                                <Button onClick={genrate} className="bton">
                                    <AddIcon />
                                </Button>
                            </div> : null}
                    </div>
                </form>
            </div>
        </>
    )
}


export default CreateNote;
