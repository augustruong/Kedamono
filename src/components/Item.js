import { render } from '@testing-library/react';
import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import OutsideClickHandler from 'react-outside-click-handler';
import './Item.css'

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {show: false};
        this.showInfo = this.showInfo.bind(this)
    }

    showInfo = () => {
        const {show} = this.state;
        this.setState({show: !show})
    }

    hideInfo = () => {
        const {show} = this.state;
        this.setState({show: false})
    }
    
    render() {
        return (
            <div className='item-container'>
                    <div className='item-img-wrapper'>
                        <div className='item-xline'></div>
                        <div className='item-yline'></div>
                        <img src = {process.env.PUBLIC_URL + this.props.path} className='item-img'></img>
                        {(() => {
                            if(this.props.labelName !== ""){
                                return <p className='item-label'>{this.props.labelName}</p>
                            }
                        })()}
                        
                        {(() => {
                            const items = [];
                            for (let i = 0; i < this.props.dryCount; i++) {
                                items.push(<div className='dryDot'></div>)
                            }
                            return <div className='dry-dot-wrapper'>{items}</div>;
                        })()}
                    </div>

                    <div className='item-price-wrapper'>
                        <div>
                            <p className='item-price'>{this.props.price}円</p>
                            <p className='item-name'>{this.props.name}</p>
                        </div>

                        <OutsideClickHandler onOutsideClick = {this.hideInfo}>
                            <button className='select-button' onClick={this.showInfo}>!</button>
                        </OutsideClickHandler>
                    </div>
               
                {this.state.show && 
                    <div className='item-info-wrapper'>
                        <hr className='info-line'/>
                        <p className='item-info'>
                            当バーおすすめのお酒です。<br></br>
                            缶ビール各種や山崎、響、白州などのウィスキーを取り揃えております。
                        </p>
                    </div>
                }
            </div>
        );
    }
}

export default Item