export default[
    {
        name:"Blog Title",
        desc:'An AI tool that generates blog titles based on the content of the blog',
        category:'Blog',
        icon:"https://cdn-icons-png.flaticon.com/128/3959/3959542.png",
        aiPrompt:"Generate a blog title based on the content of the blog",
        slug:"generate-blog-title",
        form:[
            {
                label:"Enter the content of the blog",
                field:"textarea",
                name:"content",
                required:true,
            },
            {
                label:"Enter the keyword",
                field:"input",
                name:"keyword",
            }
        ]
    }
]