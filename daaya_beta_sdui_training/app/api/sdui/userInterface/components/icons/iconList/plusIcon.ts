interface SvgProps {
    [key: string]: string; // This allows for any additional props
}

export default function plusIcon(additionalProps: SvgProps = {}) {
    return {
        type: "Svg",
        props: {
            width: "800px",
            height: "800px",
            viewBox: "0 0 24 24",
            fill: "none",
            d: "M13.5 3C13.5 2.44772 13.0523 2 12.5 2H11.5C10.9477 2 10.5 2.44772 10.5 3V10.5H3C2.44772 10.5 2 10.9477 2 11.5V12.5C2 13.0523 2.44772 13.5 3 13.5H10.5V21C10.5 21.5523 10.9477 22 11.5 22H12.5C13.0523 22 13.5 21.5523 13.5 21V13.5H21C21.5523 13.5 22 13.0523 22 12.5V11.5C22 10.9477 21.5523 10.5 21 10.5H13.5V3Z",
            ...additionalProps
        },
    }
} 