import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia290LjA3NEBtYWlsLnJ1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW5pc3RyYXRvciIsImlkIjoiMSIsInNob3J0TmFtZSI6IkVNUFRZIEUuIiwiZW1haWwiOiJrb3QuMDc0QG1haWwucnUiLCJwaG9uZSI6IiIsIm5iZiI6MTY4MDMzMzY4OCwiZXhwIjoxNjgwMzMzNzQ4LCJpc3MiOiJTYXR1cm4gQXBwIiwiYXVkIjoiVXNlcnNTZXJ2aWNlIn0.iID48kwF0c0yjw-IO5sUnn0v4kbEolXDS_v2-3VfZE0';

export const getUsers = () => {
     return axios.get("http://localhost:7400/api/users/getall",
        {
            headers: {
                Authorization: "Bearer " + token,
                'Access-Control-Allow-Origin' : '*'
            }
        });
}

export const getUserById = (id) => {
    return axios.get(`http://localhost:7400/api/users/get?id=${id}`,
        {
            headers: {
                Authorization: "Bearer " + token,
                'Access-Control-Allow-Origin' : '*'
            }
        });
}