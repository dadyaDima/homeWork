import React from "react";

const Breadcrumbs = ({page, onGoMain}) => {
    const isMainPage  = page[0].id === 'main'
    const mainClasses = "breadcrumb-item" + (isMainPage ? " active" : "")


    return (
        <nav>
            <ol className="breadcrumb">
                <li className={mainClasses} onClick={onGoMain}>Главная</li>
                {
                    !isMainPage && <li className="breadcrumb-item active">
                        {page[0].text}
                    </li>
                }
            </ol>
        </nav>
    );
};

export default Breadcrumbs;