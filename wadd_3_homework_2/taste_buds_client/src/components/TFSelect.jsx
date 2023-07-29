

export function TFSelect(props) {



    return (
        <div className="mt-3">

            <label
            htmlFor={props.id}
            className="text-white">{props.label}</label>

            <select
            className="mx-2 border rounded-md"
            name={props.id}
            id={props.id}
            defaultValue={false}
            onChange={props.changeHandler}>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>

        </div>
    )
}