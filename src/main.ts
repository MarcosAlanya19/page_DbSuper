import { characterDB } from './assets/Api/DB.api';
import './assets/style.css/tailwind.min.css'
import './assets/style.css/app.css'
import { $inputCharacter } from './assets/variables';
import { readValueSelect } from './assets/functions';

document.addEventListener('DOMContentLoaded', () => {
  // Info select
  characterDB()
  
  $inputCharacter.addEventListener('change', readValueSelect)
})