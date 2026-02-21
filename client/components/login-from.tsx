"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
export const LoginForm = () => {
    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-4">
                <Image src={"/login.svg"} alt="login" width={400} height={400} />
                <h1 className="text-6xl font-extrabold text-indigo-400 ">Welcome Back ! to Orbital CLI</h1>
                <p className="text-base front-medium text-zinc-400">Login to your account for allowing device flow </p>
            </div>
            <Card className="border-dashed border-2">
                <CardContent>
                    <div className="grid gap-6">
                        <div className="flex flex-co;l gap-4">
                            <Button
                                variant={"outline"}
                                className="w-full h-full cursor-pointer"
                                type="button"
                                onClick={() => authClient.signIn.social({
                                    provider: "github",
                                    callbackURL: "http://localhost:3000"
                                })}
                            >
                                <Image src={"/github.svg"} alt="github" width={20} height={20} className="size-4 dark:invert" />
                                Continue with Github
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}