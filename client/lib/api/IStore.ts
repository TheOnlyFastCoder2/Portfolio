export interface IProject {
  title: string,
  img: string,
  git: string,
  website: string
}

export default interface IState {
  projects: IProject[],
}

