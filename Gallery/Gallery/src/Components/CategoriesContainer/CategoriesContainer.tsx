// @flow 
import * as React from 'react';

export const CategoriesContainer = ({data, setCategories}: {data:string[], setCategories:any}) => {
    return (
        <div  className='flex mb-4 flex-row gap-8'>
            <div onClick={() => setCategories('All')} className='bg-[#3b9810] cursor-pointer rounded p-4'>All</div>
            {data.map((item) => <div onClick={() => setCategories(item)} className='bg-[#3b9810] cursor-pointer rounded p-4'>{item}</div>)}
            
        </div>
    );
};