import { render } from '@testing-library/react';
import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import OutsideClickHandler from 'react-outside-click-handler';
import './FavoriteItem.css'

class FavoriteItem extends Component {
    constructor(props) {
        super(props)
        this.state = {show: false};
        this.name = this.props.name;
        this.price = this.props.price;
        this.dryCount = this.props.dryCount;
        this.path = this.props.path;
        this.labelName = this.props.labelName;

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
            <div className='fa-item-container'>
                
                    <div className='fa-item-img-wrapper'>
                        <div className='fa-item-xline'></div>
                        <div className='fa-item-yline'></div>
                        <img alt='' src = {this.path} className='fa-item-img'></img>
                        {(() => {
                            if(this.labelName !== ""){
                                return <p className='fa-item-label'>{this.labelName}</p>
                            }
                        })()}
                        
                        {(() => {
                            const items = [];
                            for (let i = 0; i < this.dryCount; i++) {
                                items.push(<div className='dryDot'></div>)
                            }
                            return <div className='dry-dot-wrapper'>{items}</div>;
                        })()}
                    </div>

                    <div className='fa-item-price-wrapper'>
                        <div>
                            <p className='item-price'>{this.price}</p>
                            <p className='item-name'>{this.name}</p>
                        </div>

                        <OutsideClickHandler onOutsideClick = {this.hideInfo}>
                            <button className='select-button' onClick={this.showInfo}>!</button>
                        </OutsideClickHandler>
                    </div>
               
                {this.state.show && 
                    <div className='item-info-wrapper'>
                        <hr className='info-line'/>
                        <p className='fa-item-info'>当バーおすすめのお酒です。<br></br>缶ビール各種や山崎、響、白州などのウィスキーを取り揃えております。</p>
                    </div>
                }
            </div>
        );
    }
}

export default FavoriteItem