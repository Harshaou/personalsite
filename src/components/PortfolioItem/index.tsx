import React, { useState, useEffect, useRef } from "react"
import { Button } from "../Common/ui"
import Img from "gatsby-image"
import { ArrowRight } from "react-feather"

import Parallax from "../../utils/parallax"
import { IndexPageQuery_portfolio_edges_node } from "../../pages/__generated__/IndexPageQuery"

import { SiTailwindcss, SiReact, SiGraphql, SiJavascript, SiGatsby, SiHtml5,
    SiNextDotJs, SiTypescript, SiCss3, SiRedux, SiMongodb, SiWordpress, SiMeteor } from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';



let iconItems = [
   {name: 'Javascript', icon: <SiJavascript size={60} color="yellow" /> },  {name: 'Typescript', icon: <SiTypescript size={60} color="#3684e3" />, }, 
   {name: 'React', icon: <SiReact size={60} color="#3b9cc4" /> }, {name: 'React-Native', icon: <SiReact size={60} color="#3b9cc4" /> },
   {name: 'Redux', icon: <SiRedux size={60} color="#7c2ec9" /> }, {name: 'Next', icon: <SiNextDotJs size={60} /> },
   {name: 'Gatsby', icon: <SiGatsby size={60} color="#9146db" /> },  {name: 'GraphQl', icon: <SiGraphql size={60} color="#eb3dd3" />  },
   {name: 'AntDesign', icon: <AiOutlineAntDesign size={60} color="#22A7F0" /> }, {name: 'Tailwindcss', icon: <SiTailwindcss size={60} color="#15b4bd" /> },
   {name: 'Wordpress', icon: <SiWordpress size={60} color="#305d82" /> }, {name: 'meteor', icon: <SiMeteor size={60} color="#305d82" />}
]


type ItemPortfolioProps = { data: IndexPageQuery_portfolio_edges_node, even: boolean };

export const ItemPortfolio: React.FC<ItemPortfolioProps> = ({ data, even }) => {

    const stacks = data.frontmatter.stack.split(",")

    const sctackIcons = iconItems.filter(item => stacks.includes(item.name.toLowerCase()))

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

    return (
            <div className="large-container mx-auto">
                <div
                    className={`my-4 py-8 lg:py-24 portfolio-item md:flex ${
                        state.animated ? "begin-animation" : ""
                    } ${even ? "even flex-row-reverse" : ""}`}
                >
                    <div className="relative flex-1 flex items-center justify-center">
                        
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 mx-10">
                            {sctackIcons.map((item, _) => (
                                <div className= "flex flex-col items-center">
                                <div>{item.icon}</div>
                                <p className="mt-2">{item.name}</p>
                                </div>
                            ))}
                            </div>
                        
                    </div>
                    <div className="flex-1 flex md:px-4 lg:px-6 items-center">
                        <div
                            className={`flex flex-1 flex-wrap  ${
                                even ? "md:justify-end md:text-right" : ""
                            }`}
                        >
                            <h3 className="text-color-1 text-5xl font-black">
                                {data.frontmatter.title}
                            </h3>
                            <p className="lg:mt-4">
                                {data.frontmatter.description}
                            </p>
                            <Button
                                to={data.fields.slug}
                                label={`View ${data.frontmatter.title}`}
                                title={"View"}
                                iconRight={<ArrowRight />}
                            />
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default ItemPortfolio;