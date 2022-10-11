import { selectCharacter } from "../functions";

const url = 'https://dragon-ball-super-api.herokuapp.com/api/characters'

export const characterDB = async() => {
  try {
    const result = await fetch(url)
    const response = await result.json();
    return selectCharacter(response)
  } catch (err) {
    console.error(err);
  }
}

export const characterCard = async(character: string) => {
  try {
    const result = await fetch(`${url}/${character}`)
    const response = await result.json();
    return response
  } catch (err) {
    console.error(err);
  }
}