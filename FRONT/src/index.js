// == Import : npm
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
// Composants
import App from 'src/components/App';
// == Import : local
import './styles/index.scss';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = <App />;
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
