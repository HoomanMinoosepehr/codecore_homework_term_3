export function Input(props) {
    
  
    return (
      <div className="mt-3">
        <label htmlFor={props.id} className='text-white'>
          {props.label}
        </label>
        <br />
        <input
          className="w-full border-2 border-slate-400 bg-white bg-opacity-60 rounded-md px-1 ml-1"
          type={props.type || 'text'}
          name={props.name || props.id}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    );
  }
  
  export function TextArea(props) {
    const labelColor = {
      white: 'text-white',
      gray: 'text-zinc-700',
    };
  
    return (
      <div className="mt-3">
        <label htmlFor={props.id} className='text-white'>
          {props.label}
        </label>
        <br />
        <textarea
          className="w-full border-2 border-slate-400 bg-white bg-opacity-60 rounded-md px-1 ml-1"
          type={props.type || 'text'}
          name={props.name || props.id}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    );
  }