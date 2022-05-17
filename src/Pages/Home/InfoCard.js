import React from 'react';

const InfoCard = ({ img }) => {
    return (
        <div class="card lg:card-side shadow-xl bg-cyan-400">
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title text-white">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;