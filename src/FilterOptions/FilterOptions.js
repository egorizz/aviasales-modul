import React from "react";

const FilterOptions = () => {
    return (
        <div className="filter-options">
            <div className="filter-options__header">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
                <div className="filter-options__body">
                    <div className="filter-options__option">
                <div className="filter-options__checkbox checked"></div>
                <div className="filter-options__label">Все</div>
            </div>
            <div className="filter-options__option">
                <div className="filter-options__checkbox checked"></div>
                <div className="filter-options__label">Без пересадок</div>
            </div>
            <div className="filter-options__option">
                <div className="filter-options__checkbox"></div>
                <div className="filter-options__label">1 пересадка</div>
            </div>
            <div className="filter-options__option">
                <div className="filter-options__checkbox"></div>
                <div className="filter-options__label">2 пересадки</div>
            </div>
            <div className="filter-options__option">
                <div className="filter-options__checkbox checked"></div>
                <div className="filter-options__label">3 пересадки</div>
            </div>
                </div>
            

        </div>
    )
}

export default FilterOptions;