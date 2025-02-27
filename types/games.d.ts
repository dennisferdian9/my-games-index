declare global {
  interface GameResponseModel {
    id: number
    developer: string
    genre: string
    thumbnail: string
    title: string
    description: string
    short_description: string
    description: string
    publisher: string 
    status: string
    minimum_system_requirements: MinimumRequirement
    release_date: string
    screenshots: screenshotsModel[]
    platform: string 
  }
  interface GameModel {
    id: number
    developer: string
    genre: string
    thumbnail: string
    title: string
    description: string
    releaseDate: Date
  }

  interface screenshotsModel {
    id: number 
    image: string
  }

  interface MinimumRequirement {
    os: string 
    processor: string 
    memory: string 
    graphics: string 
    storage: string 
  }

  interface GameDetailModel {
    id: number
    title: string
    thumbnail: string
    status: string
    shortDescription: string 
    detailDescription: string
    genre: string
    platform: string 
    publisher: string 
    developer: string 
    releaseDate: Date 
    minimumRequirement: MinimumRequirement
    screenshots: screenshotsModel[]
  }
}

export {}