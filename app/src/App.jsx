import React, { Component } from 'react';
import { App, View, Statusbar } from 'framework7-react';
import useFeathers from 'usefeathers';
import routes from './routes';
import setInstanceF7 from './config/f7';
import feathers from './config/feathers';

export default class Application extends Component {
  componentDidMount() {
    this.$f7ready(setInstanceF7);
    useFeathers(feathers);
  }

  render() {
    const params = {
      theme: 'md',
      name: 'Whatsapp Dark',
      routes
    };
  
    return (
      <App params={params} themeDark>
        <Statusbar />
        <View
          main
          url='/login'
        />
      </App>
    );
  }
}
