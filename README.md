# 后端接口

-   登陆（login)
    -   uri: https://leetcode-plus-plus-backend.netlify.com/.netlify/functions/login
        {
        "username": "test123",
        "password": "123456"
        }
    -   返回值：404，400，200
    -   会返回一个 token 值用作 auth 用
-   注册（register)
    -   uri: https://leetcode-plus-plus-backend.netlify.com/.netlify/functions/register
        {
        "username": "test123",
        "password": "123456",
        "email": "test@test.ca"
        }
    -   返回值：404，400，200
    -   会返回一个 token 值用作 auth 用
-   验证（authentication)
    -   uri: https://leetcode-plus-plus-backend.netlify.com/.netlify/functions/register
    -   headers: {
        x-auth-token: <token>
        }
    -   返回值：404，400，200
    
## 文章列表、详情
-   所有文章（getPosts)
    -   uri: https://leetcode-plus-plus-backend.netlify.com/.netlify/functions/getPosts
    -   返回值：404，400，200
    -   返回值里会返回 {
            id: <_id>,
            content: String,
            tags: Array,
            username: String,
            title: String,
            createdAt: String,
            likes: Number,
            Comments: Array
        }
-   单独文章（getPost)
    -   uri: https://leetcode-plus-plus-backend.netlify.com/.netlify/functions/getPost
    -   params: {
            "id": <postId>
        }
    -   返回值：404，400，200 
-   生成文章(addPost)
    -   uri: https://leetcode-plus-plus-backend.netlify.com/.netlify/functions/getPost
    -   params: {
            content: String,
            tags: Array,
            username: String,
            title: String,
            createdAt: String,
            likes: Number,
            Comments: Array
        }
    -   返回值：404，400，200 
    
