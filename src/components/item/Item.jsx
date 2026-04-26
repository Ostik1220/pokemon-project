

export const Item = ({info}) => {
    console.log(info)

    return(
        <>
        <div>
            <h2>{info.name}</h2>
            <p>{info.element}</p>
        </div>
        </>
    )
}