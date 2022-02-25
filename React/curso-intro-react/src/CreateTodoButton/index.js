import React from "react";
import './CreateTodoButton.css'



function CreateTodoButton (props) {

    // const onButtonClick = () => {
    //     alert ('Deberia abrirse el modal');
    // }

    const onButtonClick = (msg) => {
        alert(msg);
    };
    
    return (
        <button 
        className='CreateTodoButton'
        // onClick={() => console.log('se dio un click')}
        // onClick={onButtonClick}
        onClick={() => onButtonClick('Deberia abrirse el modal')}

        >
            +
        </button>
    );
}

export { CreateTodoButton };