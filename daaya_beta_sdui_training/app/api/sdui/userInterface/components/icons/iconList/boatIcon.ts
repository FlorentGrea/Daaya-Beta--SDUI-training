interface SvgProps {
    [key: string]: string; // This allows for any additional props
}

export default function boatIcon(additionalProps: SvgProps = {}) {
    return {
        type: "Svg",
        props: {
            fill: "#000000",
            width: "800px",
            height: "800px",
            viewBox: "0 0 256 256",
            id: "Flat",
            d: "M222.3252,106.792,212,103.35059V56a20.02229,20.02229,0,0,0-20-20H140V24a12,12,0,0,0-24,0V36H64A20.02229,20.02229,0,0,0,44,56v47.35059l-10.32617,3.44189A19.97529,19.97529,0,0,0,20,125.76611V160a11.98908,11.98908,0,0,0,.46191,3.29688c16.335,57.17431,88.67579,76.66552,103.01172,79.99218a20.14345,20.14345,0,0,0,9.05274,0c14.33593-3.32666,86.67675-22.81787,103.01172-79.99218A11.98908,11.98908,0,0,0,236,160V125.76611A19.976,19.976,0,0,0,222.3252,106.792ZM68,60H188V95.35059L134.32422,77.459a19.97861,19.97861,0,0,0-5.70923-.99511c-.20508-.01026-.40747-.03125-.615-.03125-.20825,0-.41113.021-.6167.03125a19.9951,19.9951,0,0,0-5.7085.99511L68,95.35059Zm144,98.2373c-13.46484,42.5625-73.46875,58.89942-84,61.459-10.53125-2.55957-70.53516-18.89649-84-61.459V128.64893l15.55518-5.18506c.01464-.0044.0288-.00977.04345-.01465L116,104.64893V168a12,12,0,0,0,24,0V104.64893l56.40137,18.80029c.01465.00488.02881.01025.04345.01465L212,128.64893Z",
            ...additionalProps
        },
    }
}