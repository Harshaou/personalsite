import React, { useState, useEffect, useRef } from "react"
import { Button } from "../Common/ui"
import { ArrowRight } from "react-feather"
import Vimeo from '@u-wave/react-vimeo';
import Parallax from "../../utils/parallax"
import { IndexPageQuery_portfolio_edges_node } from "../../pages/__generated__/IndexPageQuery"



export const ItemPortfolio = () => {
    const [state, changeState] = useState({
        animated: false,
        percentage: 0,
    })

    const getWindowHeight = () => {
        const w = window
        const d = document
        const e = d.documentElement
        const g = d.getElementsByTagName("body")[0]

        return w.innerHeight || e.clientHeight || g.clientHeight
    }

    const getWindowWidth = () => {
        const w = window
        const d = document
        const e = d.documentElement
        const g = d.getElementsByTagName("body")[0]

        return w.innerWidth || e.clientWidth || g.clientWidth
    }

    const updateState = p => changeState({ ...state, ...p })

    const percentageThreshold = 0.3

    let transform = useRef(0);


    useEffect(() => {
        transform.current = Math.min(getWindowHeight() / 2, 300) * Math.max(0, state.percentage - percentageThreshold);
        
        if(getWindowWidth() < 1024) {
            updateState({
                animated: true
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.percentage])

    if (state.percentage > percentageThreshold && !state.animated)
        updateState({ animated: true })

    const pages = [
        {
            img: "https://images.unsplash.com/photo-1622525719754-e03c615c8624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
            title: 'skills',
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptates sapiente est fugit quibusdam eligendi quo natus animi.",
            even: true,
        },
        {
            img: "https://images.unsplash.com/photo-1581922825485-9a9bdb7273e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
            title: 'view works',
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptates sapiente est fugit quibusdam eligendi quo natus animi.",
            even: false,
        }
    ]

    return (
        <Parallax changePercentage={updateState}>
            {pages.map((item, _) => (
                <div key={_} className="large-container mx-auto">
                <div
                    className={`my-4 py-8 lg:py-24 portfolio-item md:flex ${
                        state.animated ? "begin-animation" : ""
                    } ${ (_ + 1) % 2 === 0 ? "even flex-row-reverse" : ""}`}
                >
                    <div className="relative flex">
                        <div
                            className="image relative z-10 flex "
                            style={{
                                transform: `translate(0px,${transform.current}px)`,
                            }}
                        >
                          <img style={{width: '100%'}} src={item.img} alt="tt" />
                            {/* <Vimeo
                                style={{width: 300,}}
                                video="https://vimeo.com/558492515"
                                autoplay
                                /> */}
                        </div>
                    </div>
                        

                    <div className="flex-1 flex md:px-4 lg:px-6 items-center">
                        <div
                            className={`flex flex-1 flex-wrap  ${
                                (_ + 1) % 2 === 0 ? "md:justify-end md:text-right" : ""
                            }`}
                        >
                            <h3 className="text-color-1 text-5xl font-black to-up">
                                {item.title}
                            </h3>
                            <p className="lg:mt-4 to-up">
                                {item.description}
                            </p>
                            <Button
                                to={`/about`}
                                label={`View ${'llllll'}`}
                                title={"View"}
                                iconRight={<ArrowRight />}
                            />
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </Parallax>
    )
}

export default ItemPortfolio;