import DotGrid from "@/components/DotGrid";

function page() {
    return (
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <DotGrid
                baseColor="#3a3446"
                activeColor="#ffffff"
                shape="circle"
                dotSize={5}
                gap={18}
                proximity={140}
                strength={1}
                bounce={0.6}
                tension={0.4}
                returnDuration={0.8}
                shockRadius={320}
                shockStrength={5}
                swell={0.8}
                stretch={0.5}
                glow={0.5}
                fade={0}
                intro
                opacity={1}
                mouseInteraction
                clickShock
            />
        </div>
    )
}

export default page