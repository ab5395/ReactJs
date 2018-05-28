export class Actor {
    Id: number;
    Name: string;
    Gender: string;
    Age: number;
    Picture: string;
}
export class Movie {
    Id: number;
    Title: string;
    Director: string;
    DateReleased: string;
    ReleasedBy: string;
    Rating: string;
    Genre: string;
    GrossRevenue: number;
}
export class MovieActor {
    MovieId: number;
    ActorId: number;
}