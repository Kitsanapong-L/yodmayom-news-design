"use client";

import { useEffect, useState } from "react";
import AnimatedContent from "./AnimatedContent";
import Logoloading from "./LogoLoading";

export default function HomeLoader({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Logoloading />;
    }

    return (
        <AnimatedContent
            trigger="mount"
            distance={24}
            duration={0.5}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
        >
            {children}
        </AnimatedContent>
    );
}
