const EachImageItem = (props) =>{
    const {EachImage} = props
    const {id,category,imgUrl,hoverText,link} = EachImage
    return(
        <img src={imgUrl} alt="all works"/>
    )
}

export default EachImageItem