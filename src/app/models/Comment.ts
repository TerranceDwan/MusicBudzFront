export class Comment {
  commentId: number
  userId: number
  reviewId: number
  time: Date
  comment: string

  constructor(commentId: number, userId: number, reviewId: number, time: Date, comment: string) {
    this.commentId = commentId;
    this.userId = userId;
    this.reviewId = reviewId;
    this.time = time;
    this.comment = comment;
  }
}