import { characterCard } from "./Api/DB.api";
import { Character, EventElement } from "./Interface/App.interface";
import { RootObject } from "./Interface/CharacterDB.interface";
import { $cardCharacter, $dataList } from "./variables";

const objCharacter: Character = {
  name : ''
}

export const selectCharacter = (data: RootObject[]) => {
  data.forEach((value: RootObject) => {
    const {name} = value;
    const option = document.createElement("option");
    option.value = name;
    $dataList.appendChild(option);
  });
}

export const readValueSelect = (e: Event) => {
  const event = e as EventElement
  objCharacter.name = event.target.value;

  if(!Object.values(objCharacter).every(value => value !== '')){
    console.log('esta vacio');
    
    return
  }
  infoCard()
}

export const infoCard = async() =>{
  clearHTML()
  const data: RootObject = await characterCard(objCharacter.name)
  const {name, imageUrl, originplanet, role, specie, status, transform, universe} = data
  
  const card = document.createElement('div')
  card.innerHTML = `
  <div
  class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a class="grid justify-center" href="#">
      <img
        loading="lazy"
        class="rounded-t-lg h-56 py-2"
        src="${imageUrl}"
        alt=""
      />
    </a>
    <div class="p-5">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ${name}
        </h5>

        <div class="flex justify-between items-center mb-4">
          <h5
            class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Especio: ${specie}
          </h5>

        </div>

        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700 ">
            
            <li class="py-2 sm:py-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white mx-2">
                    Planeta de origen:
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white mx-2">
                  ${originplanet}
                </div>
              </div>
            </li>

            <li class="py-2 sm:py-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white mx-2">
                    Estatus:
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white mx-2">
                  ${status}
                </div>
              </div>
            </li>

            <li class="py-2 sm:py-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white mx-2">
                    Transformación::
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white mx-2">
                  ${transform}
                </div>
              </div>
            </li>

            <li class="py-2 sm:py-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white mx-2">
                    Role:
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white mx-2">
                  ${role}
                </div>
              </div>
            </li>

            <li class="py-2 sm:py-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white mx-2">
                    Universo:
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white mx-2">
                  ${universe}
                </div>
              </div>
            </li>

          </ul>
        </div>

    </div>
  </div>
  `
  
  $cardCharacter.appendChild(card)
}

function clearHTML(){
  while($cardCharacter.firstChild){
    $cardCharacter.removeChild($cardCharacter.firstChild)
  }
}