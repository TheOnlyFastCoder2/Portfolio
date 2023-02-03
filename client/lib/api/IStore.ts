export interface IReviews {
  name: string,
  text: string,
  typeTask: string,
  score: number,
}

export interface IProjects {
  title: string,
  img: string,
  git: string,
  website: string
}

export default interface IState {
  reviews: IReviews[],
  projects: IProjects[],
}

