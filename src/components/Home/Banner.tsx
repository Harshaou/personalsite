import React, {useRef, useEffect, useState} from 'react'
import ScrollIntoView from "react-scroll-into-view"
import { Button } from "../Common/ui"
import { ArrowRight } from "react-feather"



const Banner = ({ data }) => {
    const wall = useRef(null)
    const twoColumnWall = data.twoColumnWall
   
    const [state, changeState] = useState({
        loaded: false,
        supportsBlend: false,
    })
    useEffect(() => {
        if (window.CSS && !state.loaded) {
            if (CSS.supports("mix-blend-mode", "screen")) {
                wall.current.classList.add("supports-blend")
                changeState({
                    loaded: true,
                    supportsBlend: true,
                })
            }
        }
    }, [state.loaded])
    let spanAttrs: Partial<{ style: unknown }> = {}

    
    if (!twoColumnWall && data.titleImage) {
        spanAttrs.style = {
            backgroundImage: `url('${data.titleImage}')`,
        }
    }

    
    const innerComponents = (
        <React.Fragment>
            <div className="title bg-bg">
                <h1
                    className={`text-6xl relative lg:text-7xl ${
                        data.capitalizeTitleOnHome ? "uppercase" : ""
                    }`}
                >
                    <span {...spanAttrs}></span>
                    Harshad M
                </h1>
            </div>
            <p className="text-lg lg:text-xl text-color-2 pt-4 lg:pt-0">
                {data.introTag}
            </p>
            <p className="text-base lg:text-lg mt-4 lg:mr-10">
                {data.description}
            </p>
            <ScrollIntoView selector="#portfolio">
                <Button
                    title="SEE WORKS"
                    type="button"
                    iconRight={<ArrowRight />}
                />
            </ScrollIntoView>
        </React.Fragment>
    )
    if (twoColumnWall) {
        return (
            <div
                className="wall h-screen flex relative justify-center items-center overflow-hidden"
                ref={wall}
            >
                {/* <div className="flex-1 flex items-center w-full h-full lg:block absolute lg:relative  top-0 left-0"> */}
                <div className="flex-1 flex items-center lg:block absolute lg:relative  top-0 left-0">
                    <div
                        className="absolute left-0 top-0 w-full h-full lg:hidden"
                        style={{
                            background: "rgba(0,0,0,.75)",
                        }} /> 
                   
                  
                    <div className="lg:px-8">
                        <img
                            src="/images/growing.jpg"
                            alt=""
                            className="h-full w-auto max-w-none lg:h-auto lg:w-full rounded-2xl" /> 
                   </div>
                </div>
                
                <div className="flex-1 text-center p-3 relative z-10 lg:text-left lg:pl-8 text-white lg:text-color-default">
                    {innerComponents}
                </div>
            </div>
        )
    }
    return (
        <div
            className="wall h-screen flex flex-col justify-center items-center text-center"
            ref={wall} >
            {innerComponents}
        </div>
    )
}
export default Banner
