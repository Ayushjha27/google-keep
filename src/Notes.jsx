import React from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const Notes = (prop) => {
    const del = () => {
        return (
            prop.delBtn(prop.id)
        )
    }
    return (
        <>

            <div className="text-center d-inline-block  p-3 mt-5 ">
                <div class="card shadow-lg " style={{ width: "15rem" }}>
                    <h4 className="pt-2 text-uppercase">{prop.va}</h4>
                    <div class="card-body">
                        <p className="text-capitalize  text-truncate">{prop.con}</p>
                        <Button onClick={del} className="bton1 ">
                            <DeleteIcon />
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Notes;

