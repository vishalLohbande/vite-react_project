
export const loginService = async (username, password) => {
//   const response = await fetch('https://your-api.com/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ username, password }),
//   });

//   if (!response.ok) {
//     throw new Error('Login failed');
//   }

//   const data = await response.json();
//   return data;
console.log(username)
  if (username === 'Vishal' && password === 'Vishal@123') {
    return {
      status: 200,
      msg: 'Login Successfully',
    };
  } else {
    return {
      status: 400,
      msg: username !== 'Vishal' ? 401 : 402,
    };
  }
};