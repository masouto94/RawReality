import React from 'react'

const SectionContainer = ({children, id}) => {
    return (
        <>
            <section  id={id} style={{height: "100vh"}}>
            {children}
            </section>
        </>
    )
}

export default SectionContainer
