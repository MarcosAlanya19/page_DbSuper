export interface Character{
  name: string
}

export type EventElement = Event & HTMLElement & {
  target: HTMLSelectElement
};