"use client";

import { useEffect, useState } from "react";
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
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Logoloading />;
    }

    return <>{children}</>;
}