type Props = { className?: string; animated?: boolean };

export function SignalRing({ className, animated = false }: Props) {
    const rings = [
        { r: 60, color: "#ff5500", delay: "0s" },
        { r: 100, color: "#00adf9", delay: "0.6s" },
        { r: 150, color: "#ff5500", delay: "1.2s" },
        { r: 210, color: "#00adf9", delay: "1.8s" },
    ];
    return (
        <svg viewBox="-240 -240 480 480" className={className} aria-hidden="true">
            {rings.map((r) => (
                <circle
                    key={r.r}
                    cx="0"
                    cy="0"
                    r={r.r}
                    fill="none"
                    stroke={r.color}
                    strokeWidth="2"
                    opacity="0.35"
                    className={animated ? "tr-ring" : ""}
                    style={animated ? { animationDelay: r.delay } : undefined}
                />
            ))}
        </svg>
    );
}

export function SignalArc({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 60 24" className={className} aria-hidden="true" fill="none">
            <path d="M4 20 Q30 -4 56 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M14 20 Q30 6 46 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
            <circle cx="30" cy="19" r="2.5" fill="currentColor" />
        </svg>
    );
}