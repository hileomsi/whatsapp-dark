import React from 'react';
import { App, View, Statusbar } from 'framework7-react';
import useFeathers from 'usefeathers';
import routes from './routes';
import feathers from './config/feathers';

export default function Application() {
  const params = {
    theme: 'md',
    name: 'Whatsapp Dark',
    routes
  };
  useFeathers(feathers);

  return (
    <App params={params} themeDark>
      <Statusbar />
      <View
        main
        url='/avatars'
      />
    </App>
  );
}
