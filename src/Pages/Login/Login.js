import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/in2.png'
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hook/UseTitle';

const Login = () => {
    useTitle("Login")
    const [showpass, setShowPass] = useState(false)
    const[error, setError]= useState([])
    const {loginUser, googleSignIn}= useContext(AuthContext)
    const navigate= useNavigate()
    const location=useLocation()
    const from= location.state?.from?.pathname || '/'

    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        })
    },[])
    
    const handleLogin=event=>{
        event.preventDefault()
        const form = event.target
        const email= form.email.value
        const password= form.password.value
        console.log(email, password);

        loginUser(email, password)
        .then(result=>{
            const user= result.user
            console.log(user);
            form.reset()
            navigate(from ,{replace: true})
           
            
        })
        .catch(e=>{
            const msg= e.message
            setError(msg)
        })
      
    }

    const handleGoogle=()=>{
        googleSignIn()
        .then(r=>{
            const user= r.user
            console.log(user);
            navigate(from ,{replace: true})
        })
        .catch(e=>{
            const msg=e.message
            setError(msg)
        })
    }

  

    return (
        <div>
            {
                loading?   <div  role="status">
                <svg  aria-hidden="true" className=" mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only ">Loading...</span>
            </div>
                :
                <>
                <div className="bg-indigo-50 ">
                <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center gap-8 ">
                    <div className=" md:hidden sm:mb-8 mb-6">
                    
                    </div>
                    <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                        <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
                            Login to your account
                        </p>
                        <p tabIndex={0} className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
                            Dont have account?
                      <Link to={'/register'} className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"> Sign up here</Link>
                              
                        </p>
                        <button onClick={handleGoogle} aria-label="Continue with google"  className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 flex items-center w-full mt-10 hover:bg-gray-100">
                            <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                                <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                                <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                                <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                            </svg>
                            <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                        </button>
                        
                      
                        <form onSubmit={handleLogin} >
                        <div>
                            <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Email{" "}
                            </label>
                            <input id="email" name='email' aria-labelledby="email" type="email" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="e.g: john@gmail.com " />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="myInput" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Password{" "}
                            </label>
                            <div className="relative flex items-center justify-center">
                                <input id="myInput" name='password' type={showpass ? "text" : "password"} className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                <div onClick={()=>setShowPass(!showpass)} className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    <div id="show">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                fill="#71717A"
                                            />
                                        </svg>
                                    </div>
                                    <div id="hide" className="hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#27272A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1={3} y1={3} x2={21} y2={21} />
                                            <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                                            <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className='mb-2 text-red-700 font-medium'>{error}</p>
                            <button  className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                                Login
                            </button>
                        </div>
                        </form>
                    </div>
                    <div className=" bg-white shadow-lg rounded xl:w-1/3   lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10  m-0  mt-3 px-2 py-6">
                        
                        <div className="flex items-start mt-8">
                          
                                
                                <img src={img} alt="" />
                          
                        </div>
                        <div className="flex items-center pl-8 mt-10">
                            
                          
                        </div>
                    </div>
                </div>
            </div>
                </>
            }
          
            
    
        </div>
    );
};

export default Login;