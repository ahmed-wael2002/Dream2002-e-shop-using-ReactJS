import React from 'react'

export const AddProduct = () => {
    return (
        <div>
            <h1>Add a product</h1>
            <form action="">
                {/*The name of the product*/}
                <label htmlFor="name">Name: </label>
                <input id={'name'} type="text"/>
                <br/>

                {/*The brand of the product*/}
                <label htmlFor="brand">Brand: </label>
                <input id={'brand'} type="text"/>
                <br/>

                {/*The release date of the product*/}
                <label htmlFor="year">Year Released: </label>
                <input id={'year'} type="number" min={2000} max={2080}/>
                <br/>

                {/*The color of the product*/}
                <label htmlFor="color">Color: </label>
                <input id={'color'} type="text"/>
                <br/>

                {/*The category of the product */}
                {/*-------- This shall be edited to add categories from the database*/}
                <label htmlFor="categories">Choose a category: </label>
                <select id="categories" name="cars">
                    <option value="mobile">Mobile</option>
                    <option value="laptop">Laptop</option>
                </select>
                <br/>

                {/*The price of the product*/}
                {/*the maximum price is 1000000 34an feh t3wim we keda*/}
                <label htmlFor="price">Year Released: </label>
                <input id={'price'} type="number" min={10} max={1000000}/>
                <br/>

                {/*The description of the product*/}
                <textarea name="description" id="description" cols="30" rows="50" placeholder={'Description'}></textarea>

                <input className={'submit-button'} type="submit"/>
            </form>
        </div>
    )
}
