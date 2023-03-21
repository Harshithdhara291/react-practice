import { ListItem ,HoverHead,Image,Anchor} from "./EIIStyledComponents"

const EachImageItem = (props) =>{
    const {EachImage} = props
    const {category,imgUrl,hoverText,link} = EachImage
    let height;
    if(category==='FLYERS' || category==='WEBSITE'){
        height='350rem'
    } else if(category==='SOCIALMEDIA'){
        height='230rem'
    }
    else{
        height='180rem'
    }
    console.log(height)
    return(
        <ListItem>
                <Image src={imgUrl} height={height} alt="images" />
                    <Anchor href={link} target="_blank" rel="noreferrer"><HoverHead>{hoverText}</HoverHead></Anchor>
        </ListItem>
    )
}

export default EachImageItem