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
