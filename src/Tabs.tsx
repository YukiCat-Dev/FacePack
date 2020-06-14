
import React from 'react';
import Tab from './Tab';
export interface TabsProps {
    facePackagesIdentifier: Array<[string, string]>
}

export interface TabsState {

}
/**
 * 选项卡的一行标签（一行Tab
 *
 * @author KotoriK
 * @class Tab
 * @extends {React.Component<TabProps, TabState>}
 */
class Tabs extends React.Component<TabsProps, TabsState> {
    state = {}
    render() {


        return (<div>
            {this.props.facePackagesIdentifier.map((v) => {
                return (<Tab key={v[0]}></Tab>)
            })}
        </div>);
    }
}

export default Tabs;