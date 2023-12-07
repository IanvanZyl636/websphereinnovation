import React, {ReactNode} from "react";

export default function PageContainer({children}: { children?: ReactNode }) {
    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 5,
            marginTop: '56px'
        }}>
            {children}
        </div>
    )
}