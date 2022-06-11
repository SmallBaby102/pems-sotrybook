// ############################################################
/**
 * @todo Document this
 */
// ############################################################


import {IonApp, setupIonicReact} from '@ionic/react';

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
import './theme/variables.css';


/* Custom Global Imports */


/* Other Imports */
import {loadSystemStoredData, selectDarkMode} from "./store/system/systemSlice";
import {loadUserStoredData, selectIsLoggedIn, setIsLoggedIn} from "./store/user/userSlice";
import {useAppDispatch, useAppSelector} from "./store/hooks";

setupIonicReact();

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const App: React.FC = () => {

    const dispatch = useAppDispatch();

    const isDarkModeEnabled = useAppSelector(selectDarkMode);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);


    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    return (
        <IonApp className={`${isDarkModeEnabled ? 'dark-theme' : ''}`}>
            Future App
        </IonApp>
    );
};

export default App;
