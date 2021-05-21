import React from 'react'

interface CustomDividerProps {
    layout?: "vertical" | "horizontal",
    color?: string,
    longitude?: string,
    width?: string,
    horizontalMargin?: string,
    verticalMargin?: string
}

const CustomDivider = ({ 
    layout = "vertical", 
    color = "#cccc", 
    longitude = "28px", 
    width = "1px",
    horizontalMargin = "15px",
    verticalMargin = "0px" 
}: CustomDividerProps) => {
    return (
        < >
        {
            layout === 'vertical' && 
            (
                <span style={{
                    height: longitude, 
                    borderLeft:`${ width } solid ${ color }`, 
                    margin: `${ verticalMargin } ${ horizontalMargin } ${ verticalMargin } ${ horizontalMargin }`
                }}></span>
            )
        }
        {
            layout === 'horizontal' && 
            (
                <span style={{
                    width: longitude,
                    borderTop:`${ width } solid ${ color }`, 
                    margin: `${ verticalMargin } ${ horizontalMargin } ${ verticalMargin } ${ horizontalMargin }`
                }}></span>
            )
        }
        </>
    )
}

export default CustomDivider
