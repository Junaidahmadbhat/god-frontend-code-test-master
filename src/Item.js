import React from 'react';

export const Item = ({item}) => {
    return (
            <div id={item.id} key={item.id}> 
              <p>{item.bodyType}</p>
              <p><span className='bold'>{item.modelName}</span><span> {item.modelType}</span></p>
              <img src={item.imageUrl} width={250} height={250}/>
              <div>
                <span className='details'>Learn</span><span className='details'>Shop</span>
              </div>  
            </div>
    )
}
