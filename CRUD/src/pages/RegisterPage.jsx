import { useForm } from 'react-hook-form';
import { useAuth } from "../context/AuthContext";
import { useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks');
    }, [isAuthenticated, navigate]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className='relative flex flex-col md:flex-row justify-center items-center min-h-screen bg-black p-4'>
            <div className="absolute inset-0 z-0">
                <img
                    src="https://th.bing.com/th/id/OIP.Gzl6K4caN-6vOjOLPZC7rgHaDd?rs=1&pid=ImgDetMain"
                    className='absolute inset-0 w-full h-full object-cover blur-md opacity-70'
                
                />
            </div>
            {/* Contenido principal */}
            <div className='relative z-10 max-w-lg mb-8 md:mb-0 md:mr-8'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6 leading-tight'>
                    <span className="block">INSERT YOUR HOMEWORK </span>
                    <span className="block">REMEMBER IT AND </span>
                    <span className="block">COMPLETE IT</span>
                </h1>
                <img
                    src="https://magazine.com.ve/wp-content/uploads/2022/06/laptop-fechas_12502.jpg"
                    className='h-64 w-64 md:h-96 md:w-96 object-cover rounded-full shadow-lg'
                    alt='Imagen principal'
                />
            </div>
            {/* Contenedor del formulario */}
            <div className='relative z-1 max-w-md w-full p-10 rounded-md shadow-lg'>
                <form onSubmit={onSubmit} className='flex flex-col gap-4'>
                <center><b><span className='text-white' >SIGN UP </span></b></center>
                {
                     RegisterErrors.map((error, i ) => (
                        <div className='bg-red-500 p-2 text-white' key={i}>
                            {error}
                     </div>
                    ))
                }
                    <input
                        type="text"
                        {...register("username", { required: true })}
                        className='w-full bg-white text-black px-4 py-2 rounded-md'
                        placeholder='Username'
                    />
                    {errors.username && <p className='text-red-500'>Username is required</p>}
                    
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className='w-full bg-white text-black px-4 py-2 rounded-md'
                        placeholder="Email"
                    />
                    {errors.email && <p className='text-red-500'>Email is required</p>}
                    
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className='w-full bg-white text-black px-4 py-2 rounded-md'
                        placeholder='Password'
                    />
                    {errors.password && <p className='text-red-500'>Password is required</p>}
                    
                    <button
                        type="submit"
                        className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition-colors'
                    >
                        Register
                    </button>
                </form>
                <p className='flex gap-x-2 justify-between my-2 text-white'>
                    Already have an account <Link to= "/login" className='text-white'>Sign in</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;
