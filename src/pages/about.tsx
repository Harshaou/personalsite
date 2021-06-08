import React from "react"
import Layout from "../components/Common/layout"
import { SiPluscodes } from 'react-icons/si'
import {BsDot} from 'react-icons/bs'
import { FaEthereum, FaBitcoin, FaLaptop} from 'react-icons/fa'
import {GiNothingToSay} from 'react-icons/gi'
import {GiHappySkull} from 'react-icons/gi'


export default ({ location }) => {

    const softSkills = ['Creativity', 'Artistic', 'Management', 'Empathy', 'Patience', 'Open-mindedness', 'Adaptability',
     'Critical thinking', 'Problem-solving', 'Accountability', 'Emotional intelligence.']

    let techSkills = [
        'Javascript', 'Typescript', 'React', 'React-Native', 'Redux', 'Next','Gatsby',
        'GraphQl', 'AntDesign', 'Tailwindcss', 'Node', 'MongoDB',
    ]
 
    return (
        <Layout
            seo={{
                title: "Contact",
            }}
            location={location}
        >
            <div className="mx-8 md:mx-32">
            <div className="boxed">
                <div className="title py-12 text-center">
                <h2 className="text-color-1 font-black text-5xl lg:text-6xl">About</h2>

                <div className="flex px-4 lg:px-24 md:px-8 pb-12">
                <div className="flex items-center mx-4"><span className="mx-1"><FaLaptop /></span>Web Dev</div>
                <div className="flex items-center mx-4"><span className="mx-1">🚀</span> Startups</div>
                <div className="flex items-center mx-4"><span className="mx-1"><FaBitcoin /></span> Bitcoin</div>
                <div className="flex items-center mx-4"><span className="mx-1">🌎</span>  Decentralization </div>
                <div className="flex items-center mx-4"><span className="mx-1"><FaEthereum /></span> Etherum</div>
                <div className="flex items-center mx-4"><span className="mx-1"><GiHappySkull /></span>Mindfullness</div> 
            </div>

                </div>
{/* 
            <div className="flex px-4 lg:px-24 md:px-8 pb-12">
                <div className="flex items-center mx-4"><span className="mx-1"><FaLaptop /></span> Programing</div>
                <div className="flex items-center mx-4"><span className="mx-1">🚀</span> Startups</div>
                <div className="flex items-center mx-4"><span className="mx-1"><FaBitcoin /></span> Bitcoin</div>
                <div className="flex items-center mx-4"><span className="mx-1">🌎</span>  Decentralization </div>
                <div className="flex items-center mx-4"><span className="mx-1"><FaEthereum /></span> Etherum</div>
                <div className="flex items-center mx-4"><span className="mx-1"><GiHappySkull /></span>Mindfullness</div> 
            </div> */}

           

                <div className="post-content px-4 lg:px-24 md:px-8 ">
                    <p> I'm Harshad. I'm a React, Javascript enthusiast. I was working as a front end developer for the last 10 months in Webdura technologies.
                At the time I'm at Webdura, I've worked with both web and mobile using React and React-native. React ecosystem is growing so rapidly, 
                which I'm so excited about. </p>
                <p>Tools like Gatsby and Next is enabling this new kind of web. From the development experience to great performance,
                good SEO, rich and delightful user experience.It's never been a better time to be a front end developer. I'm looking to be a part of team that
                adapts to new changes and make use of it.</p>
                </div>
            </div>

            
            {/* <div className="px-4 py-16 lg:py-32 lg:px-0 ">
            <h2 className="font-black text-center text-5xl text-color-1">Skills</h2>
            <div className="flex justify-center ">
                <div className="grid grid-cols-3 gap-16 py-12">
                    <div className=" ">
                        <div className="bg-white p-24 rounded-xl" >
                        {softSkills.map(item => (
                            <p>{item}</p>
                        ))}
                        </div>
                    </div>
                    <SiPluscodes size={60} />

                    <div className="bg-white p-24 rounded-xl">
                    {techSkills.map(item => (
                        <p>{item} </p>
                    ))}
                    </div>
                        
                </div>
            </div>
            </div> */}
            <hr className="mt-20"/>

            <div className="px-4 py-16 lg:py-32 lg:px-0 ">
            <h2 className="font-black text-center text-5xl text-color-1">Skills</h2>
            <div className="flex justify-center ">
                <div className="flex items-center gap-20 py-12"> 
                    <div style={{width: 400}} className="p-24 rounded-xl w-4/4 border-solid border-4" >
                        <h5>Soft Skills</h5>
                        {softSkills.map(item => (
                            <div className="flex items-center">
                                <BsDot size={20} />
                                <p>{item}</p>
                            </div>
                           
                        ))}
                    </div>
                    <SiPluscodes color="goldenrod" size={80} />
                    <div style={{width: 400}} className="p-24 rounded-xl border-solid border-4">
                    <h5>Technical skills</h5>
                        {techSkills.map(item => (
                            <div className="flex items-center">
                                <BsDot size={20} />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>  
                </div>
            </div>
            </div>

            {/* <div className="px-4 py-16 lg:py-32 lg:px-0">
            <h2 className="font-black text-center text-5xl text-color-1">Things I'm Interested</h2>
            <div className="flex ">
                <div className="flex items-center mx-4"><span className="mx-1">🚀</span> Startups</div>
                <div className="flex items-center mx-4"><span className="mx-1"><FaBitcoin /></span> Bitcoin</div>
                <div className="flex items-center mx-4"><span className="mx-1">🌎</span>  Decentralization </div>
                <div className="flex items-center mx-4"><span className="mx-1"><FaEthereum /></span> Etherum</div>
                <div className="flex items-center mx-4"><span className="mx-1"><GiHappySkull /></span>Mindfullness</div> 
            </div>
            <div className="flex items-center">
            
            </div>
            </div> */}
        </div>
           
        </Layout>
    )
}
