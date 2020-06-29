import React from 'react'

export default function Sidebar(props) {

    function selectCategory(e) {
        e.preventDefault();
        console.log('Selected category is ', e.target.innerHTML);
        let category = e.target.innerHTML;
        props.categorySelection(category);
        category = '';
    }

    return (
        <>
            <aside>
                <ul className="list-group" style={{marginTop:'80px', minWidth:'140px'}}>
                    {props.categories.map( (category,index) => {
                        return(
                            <li key={index} style={{cursor:'pointer'}}
                                className ={"list-group-item list-group-item-dark " + (category.selected ? 'selectedCategory' : '')}
                                onClick={selectCategory}>
                                {category.name}
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </>
    )
}
