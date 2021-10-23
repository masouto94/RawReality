import React from 'react'

const SectionContainer = ({children, id, url}) => {
    return (
        <>
            <section  id={id} style={{height: "100vh", backgroundImage:`url(${url})`}}>
            {children}
            </section>
        </>
    )
}

export default SectionContainer
