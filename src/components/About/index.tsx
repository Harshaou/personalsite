import React from 'react'

function index({data}) {
    return (
        <div className="boxed">
            <div className="px-4 py-20 text-center lg:py-40 lg:px-0">
                <h2 className="text-color-1 font-black text-5xl lg:text-6xl">
                    About
                </h2>
                <p className="mt-5 text-lg">{data}</p>
            </div>
        </div>
    )
}

export default index
