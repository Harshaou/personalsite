import React from 'react'
import BlogItem from './blog-item'
function index() {

    const pages = [
        {
            img: "https://images.unsplash.com/photo-1485726696757-76885c99f0f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            title: 'I’ve a breathtaking idea',
            date: ' May 10, 2020·7 min read',
            description: "Every product on Earth was invented to overcome a problem. When people confront a problem, the majority stop and search for alternatives and less settled solutions" ,
            even: true,
        },
        {
            img: "https://images.unsplash.com/photo-1500308806058-9eb40154a774?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
            title: 'Finding Flow as a Developer',
            description: "Software development is hard. In fact, I suspect one of the biggest reasons many of us enjoy programming is because we know it’s hard." ,
            even: false,
            date: ' May 3, 2020·7 min read'
        }
    ]
   
    return (
        <div className="flex flex-wrap">
            {pages.map(item => (
                <BlogItem item={item} />
            ))}
        
        </div>
    )
}

export default index
