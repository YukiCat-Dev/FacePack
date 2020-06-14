import * as React from 'react';
import TableView from './TableView';
import Tabs from './Tabs';
export interface TabViewProps {
    tabNamesList:Array<string>
    informActivate:Function 
}
 
export interface TabViewState {
    
}
 


/**
 * 包含一系列Tab和一个SelectTableView
 *
 * @author KotoriK
 * @export
 * @class TabView
 * @extends {React.Component}
 */
export default class TabView extends React.Component{
state:TabViewState={}
render(){
return(<div>
    <Tabs/>
    <TableView/>

</div>)
}
}