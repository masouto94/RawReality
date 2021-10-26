import React from 'react'

const SectionContainer = ({children, id, url}) => {
    return (
        <>
            <section className={"SectionContainer"} id={id} >
            {children}
            </section>
        </>
    )
}

export default SectionContainer
