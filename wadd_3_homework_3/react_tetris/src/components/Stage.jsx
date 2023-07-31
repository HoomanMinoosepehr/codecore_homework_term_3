import Cell from "./Cell";


export default function Stage(props) {


    return (
        <div>
            {props.stage.map(row => row.map((cell, index) => {
               return <Cell key={index} type={cell[0]}/>
            }))}
        </div>
    )
} 