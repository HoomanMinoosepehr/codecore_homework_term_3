export function SuccessButton(props) {
    return (
      <button
        className={`bg-green-600 bg-opacity-90 rounded-md hover:text-green-800 hover:bg-green-300 hover:scale-110 duration-300 mt-4 px-3 py-2 text-white border ${props.other}`}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    );
  }
  
  export function RedButton(props) {
    return (
      <div className="flex items-center">
        <button
          className={`bg-red-400 bg-opacity-90 rounded-md hover:text-yellow-300 hover:bg-red-700 hover:scale-110 duration-300 px-3 py-2 mx-2 text-white ${props.other}`}
          onClick={props.onClick}
        >
          {props.label}
        </button>
      </div>
    );
  }