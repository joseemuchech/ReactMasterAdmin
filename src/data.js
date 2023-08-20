export const menu = [
    {
        id:1,
        title: "main",
        listItem: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icons: "home.svg",
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icons: "userIcon.svg",
            },
        ],
    },

    {
        id:2,
        title: "list",
        listItem: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icons: "user.svg",
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icons: "product.svg",
            },
            {
                id: 3,
                title: "Orders",
                url: "/orders",
                icons: "order.svg",
            },
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icons: "post.svg",
            },
        ],
    },

    {
        id:3,
        title: "general",
        listItem: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icons: "element.svg",
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icons: "note.svg",
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icons: "form.svg",
            },
        ],
    },

    {
        id:4,
        title: "maintenance",
        listItem: [
            {
                id: 1,
                title: "settings",
                url: "/",
                icons: "settings.svg",
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icons: "backup.svg",
            },
        ],
    },

    {
        id:5,
        title: "analytics",
        listItem: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icons: "chart.svg",
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icons: "log.svg",
            },
        ],
    },

]


export const topDealUsers = [
    {
        id:1,
        img:"./images/image1.png",
        username: "Josee",
        email: "josee@gmail.com",
        account: "40.98",
    },
    {
        id:2,
        img:"./images/image4.png",
        username: "Elisha",
        email: "elisha@gmail.com",
        account: "78.98",
    },
    {
        id:3,
        img:"./images/image2.png",
        username: "Muthoni",
        email: "muthoni@gmail.com",
        account: "23.98",
    },
    {
        id:4,
        img:"./images/image3.jpeg",
        username: "Ken",
        email: "ken@gmail.com",
        account: "33.08",
    },
    {
        id:5,
        img:"./images/image6.png",
        username: "Queen",
        email: "queen@gmail.com",
        account: "40.98",
    },
    {
        id:6,
        img:"./images/image5.jpeg",
        username: "Amos",
        email: "amos@gmail.com",
        account: "12.64",
    },
    {
        id:7,
        img:"./images/image2.png",
        username: "Alice",
        email: "alice@gmail.com",
        account: "56.93",
    },
]



export const chartBoxUser = {
    color:"#8884d8",
    icon:"/userIcon.svg",
    title:"Total Users",
    number: 11.98,
    dataKey: "users",
    percentage: 56,
    chartData:[
        {name: "Sun", users: 400},
        {name: "Mon", users: 600},
        {name: "Tue", users: 500},
        {name: "Wed", users: 700},
        {name: "Thu", users: 400},
        {name: "Fri", users: 500},
        {name: "Sat", users: 450},
    ]
}

export const chartBoxProduct = {
    color:"red",
    icon:"/productIcon.svg",
    title:"Total products",
    number: 248,
    dataKey: "products",
    percentage: -45,
    chartData:[
        {name: "Sun", products: 400},
        {name: "Mon", products: 600},
        {name: "Tue", products: 500},
        {name: "Wed", products: 700},
        {name: "Thu", products: 400},
        {name: "Fri", products: 500},
        {name: "Sat", products: 450},
    ]
}

export const chartBoxRevenue = {
    color:"gold",
    icon:"/userIcon.svg",
    title:"Total Renevue",
    number: 17.98,
    dataKey: "revenue",
    percentage: 32,
    chartData:[
        {name: "Sun", revenue: 400},
        {name: "Mon", revenue: 600},
        {name: "Tue", revenue: 500},
        {name: "Wed", revenue: 700},
        {name: "Thu", revenue: 400},
        {name: "Fri", revenue: 500},
        {name: "Sat", revenue: 450},
    ]
}
export const chartBoxConversion = {
    color:"green",
    icon:"/userIcon.svg",
    title:"Total Conversion",
    number: 6.98,
    dataKey: "ratio",
    percentage: 65,
    chartData:[
        {name: "Sun", ratio: 400},
        {name: "Mon", ratio: 600},
        {name: "Tue", ratio: 500},
        {name: "Wed", ratio: 700},
        {name: "Thu", ratio: 400},
        {name: "Fri", ratio: 500},
        {name: "Sat", ratio: 450},
    ]
}


export const barChartVisit = {
    title:"Total Visit",
    color:"#8884d8",
    dataKey: "visit",
    chartData:[
        {name: "Sun", visit: 400},
        {name: "Mon", visit: 600},
        {name: "Tue", visit: 500},
        {name: "Wed", visit: 700},
        {name: "Thu", visit: 400},
        {name: "Fri", visit: 500},
        {name: "Sat", visit: 450},
    ]
}

export const barChartRevenue = {
    title:"Profit Earned",
    color:"#ff8042",
    dataKey: "profit",
    chartData:[
        {name: "Sun", profit: 400},
        {name: "Mon", profit: 600},
        {name: "Tue", profit: 500},
        {name: "Wed", profit: 700},
        {name: "Thu", profit: 400},
        {name: "Fri", profit: 500},
        {name: "Sat", profit: 450},
    ]
}




export const userRows = [
    {
        id: 1,
        img: "/images/image1.png",
        firstName: "Josee",
        lastName: "Muchech",
        email: "josee@gmail.com",
        phone:"0708978980",
        createAt:"08.09.2023",
        verified:true,
    },
    {
        id: 2,
        img: "/images/image1.png",
        firstName: "Elisha",
        lastName: "Maina",
        email: "maina@gmail.com",
        phone:"0708978980",
        createAt:"08.09.2023",
        verified:true,
    },
    {
        id: 3,
        img: "/images/image1.png",
        firstName: "Jackline",
        lastName: "Muthoni",
        email: "jackline@gmail.com",
        phone:"0708978980",
        createAt:"08.09.2023",
        verified:true,
    },
    {
        id: 4,
        img: "/images/image1.png",
        firstName: "Amos",
        lastName: "Kamau",
        email: "kamau@gmail.com",
        phone:"0708978980",
        createAt:"08.09.2023",
        verified:true,
    },
    {
        id: 5,
        img: "/images/image1.png",
        firstName: "Alexa",
        lastName: "Katie",
        email: "Katie@gmail.com",
        phone:"0708978980",
        createAt:"08.09.2023",
        verified:true,
    },
]

export const productRows = [
    {
        id: 1,
        img: "/images/image8.jpeg",
        title: "Play Station",
        color: "white",
        producer: "sony",
        price:"980",
        createAt:"08.09.2023",
        inStock:true,  
    },
    {
        id: 2,
        img: "/images/image8.jpeg",
        title: "Hp laptop",
        color: "Black",
        producer: "hp",
        price:"380",
        createAt:"08.09.2023",
        inStock:true,  
    },
    {
        id: 3,
        img: "/images/image8.jpeg",
        title: "Samsung Tv",
        color: "Gray",
        producer: "Samsung",
        price:"580",
        createAt:"08.09.2023",
        inStock:true,  
    },
    {
        id: 4,
        img: "/images/image8.jpeg",
        title: "Hard Drive",
        color: "Yellow",
        producer: "Microsoft",
        price:"80",
        createAt:"08.09.2023",
        inStock:true,  
    },
    {
        id: 5,
        img: "/images/image8.jpeg",
        title: "Desktop",
        color: "Black",
        producer: "Lenovo",
        price:"980",
        createAt:"08.09.2023",
        inStock:true,  
    },
]

export const orderRows = [
    {
        id: 1,
        img: "/images/image8.jpeg",
        title: "Play Station",
        color: "white",
        producer: "sony",
        price:"980",
        createAt:"08.09.2023",
        inStock:true,  
    },
    {
        id: 2,
        img: "/images/image8.jpeg",
        title: "Hp laptop",
        color: "Black",
        producer: "hp",
        price:"380",
        createAt:"08.09.2023",
        inStock:true,  
    },
    {
        id: 3,
        img: "/images/image8.jpeg",
        title: "Samsung Tv",
        color: "Gray",
        producer: "Samsung",
        price:"580",
        createAt:"08.09.2023",
        inStock:true,  
    },
    {
        id: 4,
        img: "/images/image8.jpeg",
        title: "Hard Drive",
        color: "Yellow",
        producer: "Microsoft",
        price:"80",
        createAt:"08.09.2023",
        inStock:true,  
    },
    {
        id: 5,
        img: "/images/image8.jpeg",
        title: "Desktop",
        color: "Black",
        producer: "Lenovo",
        price:"980",
        createAt:"08.09.2023",
        inStock:true,  
    },
]



export const singleUser ={
    id: 1,
    title: "Desktop",
    img: "/images/image7.jpeg",
    info: {
        username: "JoseeMuchech",
        fullname: "Josee Muchech",
        email: "josee@gmail.com",
        phone: "0987664647",
        status: "verified",  
    },
    chart:{
        dataKeys:[
            {name: "visits", color:"#82ca9d"},
            {name: "clicks", color:"#8884d8"},
        ],
        data:[
            {            
                name:"Sun",
                visits:400,
              },
              {            
                 name:"Mon",
                 visits:300,
               },
               {            
                 name:"Tue",
                 visits:200,
               },
               {            
                 name:"Wed",
                 visits:500,
               },
               {            
                 name:"Thu",
                 visits:100,
               },
               {            
                 name:"Fri",
                 visits:300,
               },
               {            
                 name:"Sat",
                 visits:400,
               },
        ],
    },
    activities:[
        {
            text: "Josee Purchased play station Digital Edition",
            time: "3 days ago",
        },
        {
            text: "Josee Purchased play station Digital Edition",
            time: "3 days ago",
        },
        {
            text: "Josee Purchased play station Digital Edition",
            time: "3 days ago",
        },
        {
            text: "Josee Purchased play station Digital Edition",
            time: "3 days ago",
        },
        {
            text: "Josee Purchased play station Digital Edition",
            time: "3 days ago",
        },
        {
            text: "Josee Purchased play station Digital Edition",
            time: "3 days ago",
        },
    ]
}

export const singleProduct ={
    id: 1,
    title: "Play Station",
    img: "/images/image8.jpeg",
    info: {
        productId: "0r4jdsiuf",
        color: "white",
        price: "756.99",
        producer: "Sony",
        export: "Japan",  
    },
    chart:{
        dataKeys:[
            {name: "visits", color:"#82ca9d"},
            {name: "Orders", color:"#8884d8"},
        ],
        data:[
              {            
               name:"Sun",
               visits:400,
               orders:2400,
             },
             {            
                name:"Mon",
                visits:250,
                orders:1390,
              },
              {            
                name:"Tue",
                visits:150,
                orders:3800,
              },
              {            
                name:"Wed",
                visits:300,
                orders:4800,
              },
              {            
                name:"Thu",
                visits:500,
                orders:2400,
              },
              {            
                name:"Fri",
                visits:200,
                orders:2400,
              },
              {            
                name:"Sat",
                visits:400,
                orders:2400,
              },
        ],
    },
    activities:[
        {
            text: "Josee Purchased play station Digital Edition",
            time: "3 days ago",
        },
        {
            text: "Josee Purchased play station Digital Edition",
            time: "3 days ago",
        },
        {
            text: "Josee Purchased play station Digital Edition",
            time: "3 days ago",
        },
        {
            text: "Josee Purchased play station Digital Edition",
            time: "3 days ago",
        },
        {
            text: "Josee Purchased play station Digital Edition",
            time: "3 days ago",
        },
        {
            text: "Josee Purchased play station Digital Edition",
            time: "3 days ago",
        },
    ]
}