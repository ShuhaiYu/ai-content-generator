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
    },
    {
        name: "Blog Topic Generator",
        desc: 'Generates engaging topics for blog posts based on the specified niche or keywords',
        category: 'Blog',
        icon: "https://cdn-icons-png.flaticon.com/128/9431/9431885.png",
        aiPrompt: "Generate blog topics based on this niche or keywords",
        slug: "blog-topic-generator",
        form: [
            {
                label: "Enter your niche or keywords",
                field: "input",
                name: "keywords",
                required: true,
            }
        ]
    },
    {
        name: "SEO Analyzer",
        desc: 'Analyzes blog posts for SEO effectiveness and suggests improvements',
        category: 'Blog',
        icon: "https://cdn-icons-png.flaticon.com/128/41/41861.png",
        aiPrompt: "Analyze the SEO of this blog post and suggest improvements",
        slug: "seo-analyzer",
        form: [
            {
                label: "Enter the blog post content",
                field: "textarea",
                name: "content",
                required: true,
            }
        ]
    },
    {
        name: "Blog Summary Creator",
        desc: 'Creates concise and effective summaries for long blog posts to enhance reader engagement',
        category: 'Blog',
        icon: "https://cdn-icons-png.flaticon.com/128/16974/16974467.png",
        aiPrompt: "Create a summary for this blog post",
        slug: "blog-summary-creator",
        form: [
            {
                label: "Enter the blog post content",
                field: "textarea",
                name: "content",
                required: true,
            }
        ]
    },
    {
        name: "Content Enhancer",
        desc: 'Enhances the quality of blog content by improving language, style, and expression',
        category: 'Blog',
        icon: "https://cdn-icons-png.flaticon.com/128/8164/8164154.png",
        aiPrompt: "Enhance the language and style of this blog post",
        slug: "content-enhancer",
        form: [
            {
                label: "Enter your blog content",
                field: "textarea",
                name: "content",
                required: true,
            }
        ]
    },
    {
        name: "Code Review Helper",
        desc: 'AI tool that provides suggestions for improving code quality during reviews',
        category: 'Development',
        icon: "https://cdn-icons-png.flaticon.com/128/6404/6404558.png",
        aiPrompt: "Suggest improvements for this code snippet",
        slug: "code-review-helper",
        form: [
            {
                label: "Enter your code snippet",
                field: "textarea",
                name: "code",
                required: true,
            },
            {
                label: "Enter the programming language",
                field: "input",
                name: "language",
            }
        ]
    },
    {
        name: "Bug Fix Generator",
        desc: 'Generates potential fixes for bugs in code based on error logs and code snippets',
        category: 'Debugging',
        icon: "https://cdn-icons-png.flaticon.com/128/10061/10061742.png",
        aiPrompt: "Generate fix suggestions based on this error log and code",
        slug: "bug-fix-generator",
        form: [
            {
                label: "Enter the error log",
                field: "textarea",
                name: "errorLog",
                required: true,
            },
            {
                label: "Enter the associated code snippet",
                field: "textarea",
                name: "codeSnippet",
                required: true,
            }
        ]
    },
    {
        name: "API Documentation Generator",
        desc: 'Creates comprehensive API documentation from code comments and structure',
        category: 'Documentation',
        icon: "https://cdn-icons-png.flaticon.com/128/718/718064.png",
        aiPrompt: "Generate API documentation from this code base",
        slug: "api-documentation-generator",
        form: [
            {
                label: "Enter your source code",
                field: "textarea",
                name: "sourceCode",
                required: true,
            }
        ]
    },
    {
        name: "Algorithm Optimizer",
        desc: 'Suggests optimizations for algorithms to improve efficiency and performance',
        category: 'Optimization',
        icon: "https://cdn-icons-png.flaticon.com/128/2961/2961130.png",
        aiPrompt: "Suggest optimizations for this algorithm",
        slug: "algorithm-optimizer",
        form: [
            {
                label: "Enter your algorithm code",
                field: "textarea",
                name: "algorithm",
                required: true,
            }
        ]
    },
    {
        name: "Unit Test Generator",
        desc: 'Generates unit tests for software code to ensure higher code quality',
        category: 'Testing',
        icon: "https://cdn-icons-png.flaticon.com/128/10435/10435145.png",
        aiPrompt: "Generate unit tests for this code",
        slug: "unit-test-generator",
        form: [
            {
                label: "Enter your code to test",
                field: "textarea",
                name: "code",
                required: true,
            }
        ]
    },
    {
        name: "Dependency Updater",
        desc: 'Suggests updates for project dependencies based on the latest versions available',
        category: 'Maintenance',
        icon: "https://cdn-icons-png.flaticon.com/128/2029/2029894.png",
        aiPrompt: "Check for updates on these dependencies",
        slug: "dependency-updater",
        form: [
            {
                label: "Enter your project dependency list",
                field: "textarea",
                name: "dependencies",
                required: true,
            }
        ]
    },
    {
        name: "Performance Analyzer",
        desc: 'Analyzes software performance and suggests areas for improvement',
        category: 'Performance',
        icon: "https://cdn-icons-png.flaticon.com/128/9732/9732828.png",
        aiPrompt: "Analyze the performance of this code",
        slug: "performance-analyzer",
        form: [
            {
                label: "Enter your code snippet",
                field: "textarea",
                name: "code",
                required: true,
            }
        ]
    },
    {
        name: "Refactoring Assistant",
        desc: 'Provides suggestions for refactoring code to improve readability and maintainability',
        category: 'Refactoring',
        icon: "https://cdn-icons-png.flaticon.com/128/4711/4711987.png",
        aiPrompt: "Suggest refactoring for this code",
        slug: "refactoring-assistant",
        form: [
            {
                label: "Enter the code to refactor",
                field: "textarea",
                name: "code",
                required: true,
            }
        ]
    },
    {
        name: "Project Estimator",
        desc: 'Estimates time and resources required for software projects based on project specs',
        category: 'Planning',
        icon: "https://cdn-icons-png.flaticon.com/128/16392/16392964.png",
        aiPrompt: "Estimate the resources needed for this project",
        slug: "project-estimator",
        form: [
            {
                label: "Enter project specifications",
                field: "textarea",
                name: "specifications",
                required: true,
            }
        ]
    }
]