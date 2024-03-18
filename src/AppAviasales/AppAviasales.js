
import React from "react";
import Ticket from '../Ticket';
import Filter from '../Filter';
import FilterOptions from "../FilterOptions";
import FiveMoreButton from '../FiveMoreButton';





const AppAviasales = () => {
    return (
        <div className="app-aviasales">
            

            <div className="app-aviasales__logo"></div>
            <div className="app-aviasales__main">
                <Filter />
                <FilterOptions />
                {
                    [1,3,3,4,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map( node => <Ticket />)
                }
                <FiveMoreButton />
            </div>

        </div>
    )
}

export default AppAviasales;