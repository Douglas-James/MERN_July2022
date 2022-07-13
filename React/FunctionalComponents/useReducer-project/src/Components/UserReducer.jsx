// useReducer import
import React, { useReducer} from 'react';

const initalState ={
  name: '',
  email: ''
};
const reducer = (state, action) => {
  return{
    ...state,
    [action.type]: action.payload
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initalState);
 
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }
    return (
        <div>
            {JSON.stringify(state)}
            <h1>{JSON.stringify(state)}</h1>
            <div>
                <label>
                    <span>Name:</span>{' '}
                    <input
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
}
