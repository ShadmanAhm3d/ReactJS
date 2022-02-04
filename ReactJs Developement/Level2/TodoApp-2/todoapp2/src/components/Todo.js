import React, { useState } from 'react';

function Todo() {

    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData])
            setInputData('');
        }
    }
    const deleteItems= (id) =>{


        const updatedItems = items.filter((elem,ind) => {
            return ind != id;
        })


        setItems(updatedItems);


    }
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption> ADD the Todo  </figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text"
                            placeholder='ADD items Here'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <i className='fa fa-plus add-btn'
                            title='Add item'
                            onClick={addItem} > </i>
                    </div>
                    <div className='showItems' >
                        {
                            items.map((elem, ind) => {

                                return (

                                    <div className='eachItem' key={ind}>
                                        <h3>{elem}</h3>
                                        <i className='far fa-trash-alt add-btn'
                                         title='Remove item'
                                         onClick={() => deleteItems(ind)}
                                          > </i>
                                    </div>
                    )
                     })
                    }
                     </div>


                    {/* button */}
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="Remove all"><span> CHECK LIST</span> </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;
