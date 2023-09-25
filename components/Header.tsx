import React from 'react'

interface Props {
    type:string;
    query:string;
    category:string;
}

const Header = ({type, query, category}: Props) => {
    if(query && category) {
        return(
            <h1 className='heading3 self-start text-white-800'> 
                Seacrh Results for "{query}" in {category}
              
            </h1>
        )
    }

    if (query){
        return(
            <h1 className='heading3 self-start text-white-800'> 
                Seacrh Results for {query}
              
            </h1>
        )
    }

    if (category){
        return(
            <h1 className='heading3 self-start text-white-800'> 
                Seacrh Results for  {category}
              
            </h1>
        )
    }
  return (
    <>
    <h1 className='heading3 self-start text-white-800'> No Results </h1>
    </>
  )
}

export default Header