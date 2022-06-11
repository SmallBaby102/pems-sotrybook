import {IonApp, IonContent, IonPage, setupIonicReact} from '@ionic/react';
import {IonReactRouter} from "@ionic/react-router";
import {Provider} from "react-redux";
import store from '../src/store/store';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../src/tailwind.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../src/theme/variables.css'

setupIonicReact();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}

export const decorators = [
  (Story) => (
      <Provider store={store}>
        <IonApp>
          <IonPage>
            <IonReactRouter>
              <IonContent>
                { Story() }
              </IonContent>
            </IonReactRouter>
          </IonPage>
        </IonApp>
      </Provider>
  ),
];
