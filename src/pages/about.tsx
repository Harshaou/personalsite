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
        'GraphQl', 'AntDesign', 'Tailwindcss', 'Node',
    ]
 
    return (
        <Layout
            seo={{
                title: "About",
            }}
            location={location}
        >
            <div className="mx-8 md:mx-32">
            <div className="boxed">
                <div className="title py-12 text-center">
                <h2 className="text-color-1 font-black text-5xl lg:text-6xl">About</h2>

                <div className="grid grid-cols-2 gap-4 lg:hidden">
                    <div className="flex items-center mx-4"><span className="mx-1"><FaLaptop /></span>Web Dev</div>
                    <div className="flex items-center mx-4"><span className="mx-1">🚀</span> Startups</div>
                    <div className="flex items-center mx-4"><span className="mx-1"><FaBitcoin /></span> Bitcoin</div>
                    <div className="flex items-center mx-4"><span className="mx-1"><FaEthereum /></span> Etherum</div>
                    <div className="flex items-center mx-4"><span className="mx-1"><GiHappySkull /></span>Mindfullness</div>
                    <div className="flex items-center mx-4"><span className="mx-1">🌎</span>  Decentralization </div>
                </div>

                <div className="hidden lg:flex px-4 lg:px-24 md:px-8 pb-12 ">
                    <div className="flex items-center mx-4"><span className="mx-1"><FaLaptop /></span>Web Dev</div>
                    <div className="flex items-center mx-4"><span className="mx-1">🚀</span> Startups</div>
                    <div className="flex items-center mx-4"><span className="mx-1"><FaBitcoin /></span> Bitcoin</div>
                    <div className="flex items-center mx-4"><span className="mx-1">🌎</span>  Decentralization </div>
                    <div className="flex items-center mx-4"><span className="mx-1"><FaEthereum /></span> Etherum</div>
                    <div className="flex items-center mx-4"><span className="mx-1"><GiHappySkull /></span>Mindfullness</div> 
                </div>
                </div>


                <div className="post-content px-4 lg:px-24 md:px-8 ">
                    <p> I'm Harshad. I'm a React, Javascript enthusiast. I was working as a front end developer for the last 10 months in Webdura technologies.
                At the time I'm at Webdura, I've worked with both web and mobile using React and React-native. React ecosystem is growing so rapidly, 
                which I'm so excited about. </p>
                <p>Tools like Gatsby and Next is enabling this new kind of web. From the development experience to great performance,
                good SEO, rich and delightful user experience.It's never been a better time to be a front end developer. I'm looking to be a part of team that
                adapts new changes and make use of it.</p>
                </div>
            </div>

            
            {/* <hr className="mt-20"/> */}

        {/* <div className="md:flex flex-col items-center px-4 py-16 lg:py-32 lg:px-0 ">
        <h2 className="font-black text-center text-5xl text-color-1">Experience</h2>
        <div className="relative w-1/2 mt-20">
            <div className="border-r-2 border-white absolute h-full top-0" style={{left: '15px'}} />
            <ul className="list-none m-0 p-0">
            <li className="mb-2">
                <div className="flex items-center mb-1">
                <div className="bg-white rounded-full h-8 w-8" />
                <div className="flex-1 ml-4 font-medium">Dec 2018 - Began to study coding</div>
                </div>
                <div className="ml-12">
               HTML | CSS | JavaScript | ReactJS
                </div>
            </li>
            <li className="mb-2">
                <div className="flex items-center mb-1">
                <div className="bg-white rounded-full h-8 w-8" />
                <div className="flex-1 ml-4 font-medium">Aug 2020 - Frontend Developer Intern</div>
                </div>
                <div className="ml-12">
                Webdura Technologies
                </div>
            </li>
            <li className="mb-2">
                <div className="flex items-center mb-1">
                <div className="bg-white rounded-full h-8 w-8" />
                <div className="flex-1 ml-4 font-medium">Dec 2020 - Frontend Developer</div>
                </div>
                <div className="ml-12">
                I've worked with React, React-Native and Gatsby at this time
                </div>
            </li>
            <li className="mb-2">
                <div className="flex items-center mb-1">
                <div className="bg-white rounded-full h-8 w-8" />
                <div className="flex-1 ml-4 font-medium">May 31 2021</div>
                </div>
                
            </li>
            </ul>
        </div>
        </div> */}


        <hr className="mt-10"/>

            <div className="md:hidden px-4 py-16 lg:py-20 lg:px-0 ">
            <h2 className="font-black text-center text-5xl text-color-1">Skills</h2>
            <div className="flex flex-col justify-center ">
                <div className="flex flex-col items-center gap-20 py-12"> 
                    <div style={{width: 300}} className="p-24 rounded-xl w-4/4 border-solid border-4" >
                        <h5>Soft Skills</h5>
                        {softSkills.map(item => (
                            <div className="flex items-center">
                                <BsDot size={20} />
                                <p>{item}</p>
                            </div>
                           
                        ))}
                    </div>
                    <SiPluscodes color="goldenrod" size={80} />
                    <div style={{width: 300}} className="p-24 rounded-xl border-solid border-4">
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

            <div className="hidden md:block px-4 py-16 lg:py-32 lg:px-0 ">
            <h2 className="font-black text-center text-5xl text-color-1">Skills</h2>
            <div className="md:flex justify-center ">
                <div className="md:flex items-center gap-20 py-12"> 
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
        
        </div>
           
        </Layout>
    )
}
