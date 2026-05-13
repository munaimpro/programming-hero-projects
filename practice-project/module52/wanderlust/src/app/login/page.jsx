'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Input, Label, TextField, Form } from '@heroui/react';
import { Check } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const user = Object.fromEntries(formData.entries());
    
    console.log(user);

    const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
        rememberMe: false,
    })

    console.log(data, error);

    if (data) {
        redirect('/');
    }

    if (error) {
        alert("Error: " + error.message);
    }
}

const SigninPage = () => {
    return (
        <div className='container mx-auto border mt-30 max-w-2xl rounded-lg'>
            <Card>
                <h2 className="text-3xl font-bold mb-4 text-center">Sign In Your Account</h2>
                <Form onSubmit={onSubmit} className="flex flex-col gap-4">

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    
                    <div className="flex gap-2">
                        <Button className="rounded-none w-full bg-cyan-500" type="submit">
                            <Check />
                            Sign In
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default SigninPage;