import React from 'react'

export const AddCategory = () => {
    return (
        <div>
            <h1>Add a category</h1>
            <form action="">
                {/*The name of the category*/}
                {/* For Rafik: I don't know if having the same id and name for different files might conlict */}
                <label htmlFor="category">Category name: </label>
                <input id={'category'} type="text"/>
                <br/>
            </form>
        </div>
    )
}
