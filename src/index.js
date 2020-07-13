import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import FrontTermsScreen from './views/FrontTermsScreen';
import TermTitlesScreen from './views/TermTitlesScreen';
import ArticleScreen from './views/ArticleScreen';
import AboutAppScreen from './views/AboutAppScreen';
import SettingsScreen from './views/SettingsScreen';


const navigator = createStackNavigator({
    Front: FrontTermsScreen,
    Titles: TermTitlesScreen,
    Article: ArticleScreen,
    About : AboutAppScreen,
    Settings: SettingsScreen,
}, {
    initialRouteName: 'Front',
    defaultNavigationOptions: {
        title: 'New Muslim Guide'
    }
});

export default createAppContainer(navigator);