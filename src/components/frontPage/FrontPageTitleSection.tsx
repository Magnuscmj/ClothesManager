import React, { FC } from 'react'

export const FrontPageTitleSection : FC = () => {
    return (
        <div id="welcomeSection">
                <div style={{textAlign: "center", height: "250px", backgroundColor: '#85abff'}}>
                    <h1 style={{color: "black"}}>Welcome to MyClothes</h1>
                    <p>Use this platform to view your inventory of clothes and wearables!</p>
                </div>
        </div>
    )
}
