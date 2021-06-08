
import React, { useState, useEffect, useRef } from "react"
import { Button } from "../Common/ui"
import { ArrowRight } from "react-feather"
import ReactPlayer from 'react-player/lazy'
import { SiTailwindcss, SiReact, SiGraphql, SiJavascript, SiGatsby, SiHtml5,
     SiNextDotJs, SiTypescript, SiCss3, SiRedux, SiMongodb } from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { FaNode, FaLaptopCode } from 'react-icons/fa';



let iconItems = [
    {name: 'Javascript', icon: <SiJavascript size={50} color="yellow" /> },  {name: 'Typescript', icon: <SiTypescript size={50} color="#3684e3" />, }, 
    {name: 'React', icon: <SiReact size={50} color="#3b9cc4" /> }, {name: 'React-Native', icon: <SiReact size={50} color="#3b9cc4" /> },
    {name: 'Redux', icon: <SiRedux size={50} color="#7c2ec9" /> }, {name: 'Next', icon: <SiNextDotJs size={50} /> },
    {name: 'Gatsby', icon: <SiGatsby size={50} color="#9146db" /> },  {name: 'GraphQl', icon: <SiGraphql size={50} color="#eb3dd3" />  },
    {name: 'AntDesign', icon: <AiOutlineAntDesign size={50} color="#22A7F0" /> }, {name: 'Tailwindcss', icon: <SiTailwindcss size={50} color="#15b4bd" /> }, 
    {name: 'Node JS', icon: <FaNode  size={50} color="green" /> }, {name: 'MongoDB', icon: <SiMongodb  size={50} color="green" /> },
]

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
            title: 'Skills',
            // description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptates sapiente est fugit quibusdam eligendi quo natus animi.",
            description: "Front end Engineer with love for React Ecosystem. Worked with CSR using create-create-app and SSR with Next and Gatby. Familiarty with Node, Exprees and MongoDb" ,
            even: true,
        },
        {
            img: "https://images.unsplash.com/photo-1581922825485-9a9bdb7273e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
            title: 'Projects',
            description: "Front end Engineer with love for React Ecosystem. Worked with CSR using create-create-app and SSR with Next and Gatby. Familiarty with Node, Exprees and MongoDb" ,
            even: false,
        }
    ]


    return (
        <div>
            {pages.map((item, index) => (
                <div key={index} className="large-container mx-auto lg:w-11/12 ">
                <div
                    className={`my-4 py-8 lg:py-24 portfolio-item md:flex ${
                        state.animated ? "begin-animation" : "" 
                    } ${ (index + 1) % 2 === 0 ? "even flex-row-reverse" : ""}`}
                >
                    <div className="relative flex-1">
                        <div
                            className=" relative z-10"
                            style={{
                                transform: `translate(0px,${transform.current}px)`,
                            }}
                        >
                           {index === 0 ? 
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-10">
                            {iconItems.map((item, _) => (
                                <div className= "flex flex-col items-center">
                                <div>{item.icon}</div>
                                <p className="mt-2">{item.name}</p>
                                </div>
                            ))}
                         </div> :
                            <div className="flex items-center justify-center">
                                <FaLaptopCode size={200} className="rounded-full h-auto w-auto flex items-center justify-center p-20" />
                            </div>
                            }
                            </div>
                    </div>


                    <div className="flex-1 flex md:px-4 lg:px-6 items-center">
                        <div
                            className={`flex flex-1 flex-wrap  ${
                                (index + 1) % 2 === 0 ? "md:justify-end md:text-right" : ""
                            }`}
                        >
                            <h3 className="text-color-1 text-5xl font-black ">
                                {item.title}
                            </h3>
                            <p className="lg:mt-4 ">
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
        </div>
    )
}

export default ItemPortfolio;