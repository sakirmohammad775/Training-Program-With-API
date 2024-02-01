import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, } from "react";


const Login = () => {

    const { signIn, googleSignIn,githubSignIn } = useContext(AuthContext)

    //set location.....and navigate
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()

    //set google logIn
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                console.error(error)
            })
    }
    //set github logIn
    const handleGithubSignIn=()=>{
        githubSignIn()
        .then(result=>{
            const user=result.user
            console.log(user);
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const handleLogin = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)

        const email = form.get('email')
        const password = form.get('password')
        // console.log(email, password);



        signIn(email, password)
            .then(result => {
                console.log(result);

                //navigate when login,this is important..when user login state found,navigate the user details,otherwise navigate to home
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })


    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                                <p>if you do not have an account?<Link to='/register'>Register</Link></p>

                            </div>
                        </form>
                        {/* google login */}
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleSignIn} className="btn btn-primary">login with google</button>
                        </div>
                        <div>
                            <button onClick={handleGithubSignIn} className="btn btn-primary mt-5">login with github</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;