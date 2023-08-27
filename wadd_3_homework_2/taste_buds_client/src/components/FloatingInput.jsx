export function FloatingInput (props) {

    return (
        <div className="form-floating mt-3">
            <input className="form-control" name={props.name || props.id} id={props.id} type={props.type || 'text'} placeholder={props.id} onChange={props.changeHandler} onBlur={props.blurHandler} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )

}