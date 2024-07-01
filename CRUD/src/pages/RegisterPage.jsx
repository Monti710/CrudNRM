import { useForm } from 'react-hook-form';
import { useAuth } from "../context/AuthContext";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

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
                    src="https://i.pinimg.com/originals/8c/ec/78/8cec78529ca4eed590289694f17a2acb.jpg"
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
                    src="https://www.perfectwriters.co.uk/images/perfect-writers-home-1.webp"
                    className='h-64 w-64 md:h-96 md:w-96 object-cover rounded-full shadow-lg'
                    alt='Imagen principal'
                />
            </div>
            {/* Contenedor del formulario */}
            <div className='relative z-1 max-w-md w-full p-10 rounded-md shadow-lg'>
                <form onSubmit={onSubmit} className='flex flex-col gap-4'>
                <center><b><span>SIGN UP </span></b></center>
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
                        className='w-full bg-zinc-800 text-white px-4 py-2 rounded-md'
                        placeholder='Username'
                    />
                    {errors.username && <p className='text-red-500'>Username is required</p>}
                    
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className='w-full bg-zinc-800 text-white px-4 py-2 rounded-md'
                        placeholder="Email"
                    />
                    {errors.email && <p className='text-red-500'>Email is required</p>}
                    
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className='w-full bg-zinc-800 text-white px-4 py-2 rounded-md'
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
            </div>
        </div>
    );
}

export default RegisterPage;
