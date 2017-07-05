import React from 'react';


export default function LoginPage() {
    const text  = 'Welcome! Bienvenue!';

    return(
    <div className='login'>
        <h1>{text}</h1>
        <a href={'/api/auth/google'}>Login with Google</a>
    </div>
    );
}
