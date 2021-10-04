import React from 'react';
import '../App.css';
import * as global from '../global'

import logo from '../assets/domex-logo.png';
import happy_people from '../assets/happy-people.jpg';
import board from '../assets/board.jpg';
import house from '../assets/house.jpg';

import Block from '../components/Block'
import { Link } from 'react-router-dom';

function BlocksView() {

  

  return (
    <div className="App">
      <Block
        className={"Block"}
        title = {"KILKA SŁÓW O NAS"}
        subtitle = {"CZYLI KIM JESTEŚMY I DOKĄD ZMIERZAMY"}
        content = {
          <div style={{paddingTop:50}}>
            <h1>KILKA SŁÓW O NAS</h1>
            <h3 style={{color: '#00B5FE'}}>CZYLI KIM JESTEŚMY I DOKĄD ZMIERZAMY</h3>
            <div className={"ContentText"}>
                <p>{global.CONTENT_TEXT}</p>
                <br />
                <p>{global.CONTENT_TEXT1}</p>
            </div>
            <Link className="Linkclass" to={{pathname: `/houses` }} >
                <button style={{cursor: 'pointer'}}>Zobacz więcej</button>
            </Link>
          </div>
        }
        
      />
      <Block
        className={"Block"}
        title = {"KILKA SŁÓW O NAS"}
        subtitle = {"CZYLI KIM JESTEŚMY I DOKĄD ZMIERZAMY"}
        styles = {{
          paddingTop: 0,
          paddingBottom: 100
        }}
        content = {
          <div>
            <Block 
            className={"InsideBlock"} styles = {{
              background: 'radial-gradient(circle, rgba(63,247,251,1) 0%, rgba(70,147,252,1) 100%)'
            }}
            content = {
              <div style={{ paddingTop: '25%', paddingLeft: '-5vw' }}>
                <img src={logo} alt="domex-logo" width="200" />
              </div>
            }
            />
            <Block 
            className={"InsideBlock"}
            content = {<div>
              <img src={board} alt="Board" width='100%' />
            </div>}
             />
            <Block className={"InsideBlock"}
            content = {
              <div>
                <img src={happy_people} alt="Happy people" width="200%" />
              </div>
            } />
            <Block className={"InsideBlock"} styles = {{
              background: 'radial-gradient(circle, rgba(63,247,251,1) 0%, rgba(70,147,252,1) 100%)'
            }}
            content = {
              <div className={'ContentText1'}>
                <p>{global.CONTENT_TEXT2}</p>
              </div>
            } />
          </div>
        }
      />
      <Block
        className={"Block"}
        styles = {{
          backgroundImage: `url(${house})`,
          // paddingTop: 300
        }}
        content = {
          <div style={{paddingTop: 180}}>
            <ul>
              <li>
                BUDOWA DOMÓW Z DREWNA
              </li>
              <li>
                BUDOWA BRAM WJAZDOWYCH
              </li>
              <li>
                WYKOŃCZENIE WNĘTRZ
              </li>
              <li>
                ALTANY OGRODOWE
              </li>
              <li>
                KAMIENNE ELEMENTY ARCHITEKTURY
              </li>
              <li>
                REMONTY
              </li>
            </ul>
          </div>
        }
      />
      <Block
        className={"Block"}
        content = {
          <div style={{paddingTop: 50}}>
            <h1>NASZA OFERTA</h1>
            <h3 style={{color: '#00B5FE'}}>DOWIEDZ SIĘ CO MOŻEMY TOBIE ZAOFEROWAĆ</h3>
            <div className={"ContentText"}>
                <p>{global.CONTENT_TEXT}</p>
                <br />
                <p>{global.CONTENT_TEXT1}</p>
            </div>
            <Link className="Linkclass" to={{pathname: `/houses` }} >
                <button style={{cursor: 'pointer'}}>Zobacz więcej</button>
            </Link>
          </div>
        }
      />
    </div>
  );
}

export default BlocksView;
