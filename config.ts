const siteMetadata = {
    title: `Harshad M`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.png`,
    ogImage: `/images/wall.png`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: ` Front-end Developer`,
    description: ` JavaScript | TypeScript | CSS | React JS | Redux | React-Native | Gatsby JS | Next JS | GraphQL |
    Node JS | Tailwind CSS | Bootsrap | Ant-Design | Firebase`,
    about:
        `I'm Harshad. I'm a React, Javascript enthusiast. I was working as a front end developer for the last 10 months in Webdura technologies.
          At the time I'm at Webdura, I've worked with both web and mobile using React and React-native. React ecosystem is growing so rapidly, 
          which I'm so excited about. Tools like Gatsby and Next is enabling this new kind of web. From the development experience to great performance,
          good SEO, rich and delightful user experience.It's never been a better time to be a front end developer. I'm looking to be a part of team that
        adapts to new changes and make use of it.`,
    author: ``,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        // {
        //     name: "INTERESTS",
        //     url: "/interests",
        // },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {
            name: "GitHub",
            url: "https://github.com/harshaou",
        },
    ],
    social: [
        {
            name: "Twitter",
            icon: "/images/twitter.svg",
            url: "https://twitter.com/_bornin90s",
        },
        {
            name: "Github",
            icon: "/images/github.svg",
            url: "https://github.com/Harshaou",
        },
        {
            name: "Medium",
            icon: "/images/medium.svg",
            url: "https://harsh-haou.medium.com/",
        },
        {
            name: "Linkedin",
            icon: "/images/linkedin.svg",
            url: "https://www.linkedin.com/in/harshhaou",
        },
        {
            name: "Telegram",
            icon: "/images/telegram.svg",
            url: "https://t.me/Harshad_M",
        },
        
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/f227a36e-096a-4c6a-9963-9f1918a85bb3",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "harsh.haou@gmail.com",
        phone: "000-000-0000",
        address: "1234 \nLocation \nLocation",
    },
    disqus: "elemental-netlify-com",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

   

    if (res.ok) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
