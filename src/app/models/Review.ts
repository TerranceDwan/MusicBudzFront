export class Review {
  reviewId: number
  name: string
  type: string
  userId: number
  artistName: string
  rating: number
  title: string
  review: string
  
  constructor(reviewId: number, name: string, type: string, userId: number, artistName: string, rating: number, title: string, review: string) {
    this.reviewId = reviewId;
    this.name = name;
    this.type = type;
    this.userId = userId;
    this.artistName = artistName;
    this.rating = rating;
    this.title = title;
    this.review = review;
  }
}