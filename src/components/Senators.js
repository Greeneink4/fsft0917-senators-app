import React, { Component } from 'react';

import senatorsData from '../data/senatorData.json';
import './Senator.css';
import Senator from './Senator';

export default class Senators extends Component {

    filterByParty(party) {
        return senatorsData.filter(senator => senator.party === party)
    }

    renderRepublicans() {
        return this.filterByParty('Republican').map(senator => {
            return <Senator senator={senator} key={senator.person.pvsid}/>
        });
    }
    renderDemocrats() {
        return this.filterByParty('Democrat').map(senator => {
            return <Senator senator={senator} key={senator.person.pvsid}/>
        })
    }
     
    render() {

        const republicans = this.renderRepublicans();
        const democrats = this.renderDemocrats();

        return (
            <div>
                <form>
                   <input type="search" placeholder="search" />
                </form>
                <div className="senator-columns">
                    <div className="senator-republicans">
                        <h1>Republicans</h1>
                        <div className="senators">{republicans}</div>
                    </div>
                    <div className="senator-democrats">
                        <h1>Democrats</h1>
                        <div className="senators">{democrats}</div>
                    </div>
                </div>
            </div>
        )
    }
}