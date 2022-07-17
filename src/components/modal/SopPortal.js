import { useMemo } from "react";
import { createPortal } from "react-dom";

function SopPortal({ children, elementId }) {
    const rootElement = useMemo(() => document.getElementById(elementId), [
        elementId,
    ]);

    return createPortal(children, rootElement);
}

export default SopPortal;