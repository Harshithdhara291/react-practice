import { ListItem ,HoverHead,Image,Anchor} from "./EIIStyledComponents"

const EachImageItem = (props) =>{
    const {EachImage} = props
    const {id,category,imgUrl,hoverText,link} = EachImage
    let height;
    if(category==='FLYERS' || 'SOCIALMEDIA'){
        height='20rem'
    }
    return(
        <ListItem>
                <Image src={imgUrl} alt="images" />
                    <Anchor href={link} target="_blank" rel="noreferrer"><HoverHead>{hoverText}</HoverHead></Anchor>
        </ListItem>
    )
}

export default EachImageItem