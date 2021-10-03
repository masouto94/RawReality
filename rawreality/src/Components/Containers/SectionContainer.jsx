import React from 'react'

const SectionContainer = ({children}) => {
    return (
        <>
            <section style={{height: "100vh"}}>
            {children}
            </section>
        </>
    )
}

export default SectionContainer
