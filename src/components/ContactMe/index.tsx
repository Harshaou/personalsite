import React from 'react'
import { Form, Description as ContactDescription } from "../SmallComponets/contact"

function index({ data }) {
    const hasContactForm = "https://getform.io/f/ba74dd82-1de3-4922-8076-c352b511fa05"
    return (
        <div className="container mx-auto">
            <div className="pt-20 pb-10 lg:pt-40 lg:pb-20 text-center">
                <h2 className="text-color-1 font-black text-5xl lg:text-6xl">
                    Contact
                </h2>
            </div>
            <div className="flex flex-wrap pb-40">
                {hasContactForm && (
                    <div className="w-full lg:w-1/2 px-4 lg:pl-2 lg:pr-6">
                        <Form api= "https://getform.io/f/ba74dd82-1de3-4922-8076-c352b511fa05" />
                    </div>
                )}
                <div
                    className={`w-full ${
                        hasContactForm ? "lg:w-1/2" : "lg:w-2/3 mx-auto"
                    } px-6 pt-8`}
                >
                    <ContactDescription data={data} />
                </div>
            </div>
        </div>
    )
}

export default index