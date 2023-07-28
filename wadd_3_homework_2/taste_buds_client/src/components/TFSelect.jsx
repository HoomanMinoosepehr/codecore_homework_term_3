

export function TFSelect(props) {



    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <select name={props.id} id={props.id} defaultValue={false} onChange={props.changeHandler}>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>
        </div>
    )
}