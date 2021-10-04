import React from 'react';
import './App.css';
import * as global from './global'

import Block from './components/Block'

function App() {
  return (
    <div className="App">
      <Block
        title = {"KILKA SŁÓW O NAS"}
        subtitle = {"CZYLI KIM JESTEŚMY I DOKĄD ZMIERZAMY"}
        content = {
          global.CONTENT_TEXT
        }
        content1 = {
          global.CONTENT_TEXT1
        }
        styles = {
          {
            // padding: 100
          }
        }
        
      />
      <Block
        title = {"KILKA SŁÓW O NAS"}
        subtitle = {"CZYLI KIM JESTEŚMY I DOKĄD ZMIERZAMY"}
        content = {
          global.CONTENT_TEXT
        }
        styles = {
          {
            // padding: 100
          }
        }
      />
      <Block
        title = {"KILKA SŁÓW O NAS"}
        subtitle = {"CZYLI KIM JESTEŚMY I DOKĄD ZMIERZAMY"}
        content = {
          global.CONTENT_TEXT
        }
        styles = {
          {
            // padding: 100
          }
        }
      />
      <Block
        title = {"NASZA OFERTA"}
        subtitle = {"DOWIEDZ SIĘ CO MOŻEMY TOBIE ZAOFEROWAĆ"}
        content = {
          global.CONTENT_TEXT
        }
        styles = {
          {
            // padding: 100
          }
        }
      />
    </div>
  );
}

export default App;
