interface SvgProps {
    [key: string]: string; // This allows for any additional props
}

export default function filterIcon(additionalProps: SvgProps = {}) {
    return {
        type: "Svg",
        props: {
            fill: "#000000",
            width: "800px",
            height: "800px",
            viewBox: "0 0 256 256",
            id: "Flat",
            d: "M227.99951,171.99353a12.00028,12.00028,0,0,1-12,12H197.65625a31.98806,31.98806,0,0,1-59.31348,0H39.99951a12,12,0,0,1,0-24h98.34326a31.98806,31.98806,0,0,1,59.31348,0h18.34326A12.00028,12.00028,0,0,1,227.99951,171.99353ZM39.999,95.99255l34.34375.00074a31.988,31.988,0,0,0,59.31348.00024L216,95.99255a12,12,0,0,0-.001-24l-82.34277.001a31.98813,31.98813,0,0,0-59.31348-.00024L40,71.99255h-.00049a12,12,0,0,0-.00049,24Z",
            ...additionalProps
}}}