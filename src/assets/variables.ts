const $ = < T = HTMLElement>(id: string) => {
  const element = document.querySelector(id);
  if(element) return element as T;
  throw new Error('Element not found')
}

export const $dataList = $<HTMLDataListElement>('#characters')
export const $inputCharacter = $<HTMLDataListElement>('#inputCharacter')
export const $cardCharacter = $<HTMLDataListElement>('#cardCharacter')

