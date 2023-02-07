export interface IProject {
  title: string,
  img: string,
  git: string,
  website: string,
  aboutProject: string,
}

export default interface IState {
  projects: IProject[],
}

