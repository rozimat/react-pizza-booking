import React from 'react'

function Main({ondataPizza}) {
  const DataPizza= ondataPizza;
 
  return (
    <div>
      {
        DataPizza.map(item=>
            <div>
              <span>
                {item.name}
              </span>
            </div>
          )
      }
    </div>
  )
}

export default Main
