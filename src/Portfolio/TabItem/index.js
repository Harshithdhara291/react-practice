import { TabListItem,ButtonListItem } from "./TabItemStyledComponents"

const TabItem = props => {
    const {tabDetails, clickTabItem} = props
    const {tabId, displayText} = tabDetails
    console.log(props,tabDetails)
    const onClickTabItem = () => {
      clickTabItem(tabId)
    }
    
    return (
      <TabListItem>
        <ButtonListItem
          type="button"
          onClick={onClickTabItem}
        >
          {displayText}
        </ButtonListItem>
      </TabListItem>
    )
  }
  
  export default TabItem